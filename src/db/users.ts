import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const connection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  //port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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
