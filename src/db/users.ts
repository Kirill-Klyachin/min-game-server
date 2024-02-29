import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "adidas121",
  database: "users",
});

/* connection.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

connection.query("SELECT * FROM UsersData", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows);
});

connection.end(() => {
  console.log("Подключение закрыто");
}); */
