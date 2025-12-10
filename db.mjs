export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gateway_launches",
  port: 3306
});


