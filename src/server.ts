import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import { Routes } from "./router";
import "./ws";
// --ignore DATABASE/
//nodemon index.js --ignore DATABASE/
/* const app: Express = express();

dotenv.config(); */

const WHITE_LIST: string[] = [
  process.env.CLIENT_URL ?? "",
  process.env.CLIENT_URL_2 ?? "",
  process.env.CLIENT_URL_3 ?? "",
];

export class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application) {
    const corsOptions: CorsOptions = {
      origin: WHITE_LIST,
      credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    //app.use(express.urlencoded({ extended: true }));
  }
}

/* const corsOptions: CorsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

export const startServer = (app: Application) => {
  app.use(cors(corsOptions));
  app.use(express.json());

  new Routes(app);
}; */

/* function readFile(path: string, data: "utf8") {
  return new Promise<string>((resolve, reject) =>
    fs.readFile(path, data, (err, usersRaw) => {
      if (err) reject(err);
      resolve(usersRaw);
    })
  );
}

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const PORT = 4000;

app.get("/api/ground", async (request, response) => {
  const json = await readFile("../files/TEST_DATA.json", "utf8");
  const ground = JSON.parse(json);

  const dataResponse = { ground: ground.data };

  response.status(200).send(dataResponse);
});

app.post("/api/login", async (request, response) => {
  try {
    const userDataFile = await readFile("../files/user-data.json", "utf8");
    const userData = JSON.parse(userDataFile);
    const { login, password } = request.body.body;
    const user = userData[login];

    if (!user) throw new Error("Неверный пароль или логин");

    const { password: userPassword, id } = user;
    const isSuccess = password === userPassword;

    if (!isSuccess) throw new Error("Неверный пароль или логин");

    response.status(200).send({ id });
  } catch (e) {
    const error = e as Error;
    response.status(400).send({ error: error?.message });
  }
});

app.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`)); */
