import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12811398",
  password: "YOUR_PASSWORD_HERE", // wait for it to finish loading
  database: "sql12811398",
  port: 3306
});
