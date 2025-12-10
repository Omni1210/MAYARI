export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "gateway_launches",
  port: 3306
});


