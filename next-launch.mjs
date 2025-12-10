import express from "express";
import { db } from "./db.mjs";

const router = express.Router();

router.get("/next-launch", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT *
      FROM launches
      WHERE launch_date > NOW()
      ORDER BY launch_date ASC
      LIMIT 1
    `);

    if (rows.length === 0) {
      return res.json({ message: "No upcoming launches" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
