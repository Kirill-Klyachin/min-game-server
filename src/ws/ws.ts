import { WebSocketServer, WebSocket } from "ws";
import {
  getPlayerById,
  updatePlayerById,
  getOtherOnlinePlayersById,
} from "../utils";
import { PLAYER_ACTION, STEP } from "../constants/player";

export const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws, req) => {
  console.log("WS CONNECTION");
  /*  wss.clients.forEach((item, index) => {
    console.log(1);
  }); */

  const cookie = req.headers.cookie;
  const cookieArr = cookie?.split("; ");
  let id = "";
  cookieArr?.forEach((item) => {
    const itemArr = item.split("=");
    const [key, value] = itemArr;

    if (key === "userId") {
      id = value;
    }
  });
  console.log(id);

  ws.on("message", async (message) => {
    try {
      const { event, payload } = JSON.parse(message.toString());

      /* const { event, payload } = JSON.parse(message);
    console.log(event);
    console.log(payload); */

      if (event === "make_step") {
        const { action } = payload;
        const user = await getPlayerById(id);
        const coordinates = [user.x, user.y];
        let newCoordinates: number[] = [];

        if (action === PLAYER_ACTION.stepForward) {
          const [coordinatesX, coordinatesY] = coordinates;
          const newY = coordinatesY - STEP;
          newCoordinates = [coordinatesX, newY];
        } else if (action === PLAYER_ACTION.stepBack) {
          const [coordinatesX, coordinatesY] = coordinates;
          //TODO: потому будет -
          const newY = coordinatesY + STEP;
          newCoordinates = [coordinatesX, newY];
        } else if (action === PLAYER_ACTION.stepRight) {
          const [coordinatesX, coordinatesY] = coordinates;
          const newX = coordinatesX + STEP;
          newCoordinates = [newX, coordinatesY];
        } else if (action === PLAYER_ACTION.stepLeft) {
          const [coordinatesX, coordinatesY] = coordinates;
          const newX = coordinatesX - STEP;
          newCoordinates = [newX, coordinatesY];
        }

        await updatePlayerById(id, "x", newCoordinates[0]);
        await updatePlayerById(id, "y", newCoordinates[1]);
      } else if (event === "done_step") {
        const otherUsers = await getOtherOnlinePlayersById("0");
        const obj = JSON.stringify({ event: "done_step", payload: otherUsers });

        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(obj);
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  });

  ws.on("error", (e) => {
    console.log("error");
    console.log(e);
  });
});

/* wss.on("message", (data) => {
  console.log("2-received: %s", data);
});

wss.on("error", (e) => {
  console.log("error");
  console.log(e);
}); */
