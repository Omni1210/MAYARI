import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded launch data
const nextLaunch = {
  mission_name: "Test Mission",
  launch_date: "2025-12-21T15:00:00Z",
  rocket_name: "Falcon 9",
  launch_site: "Cape Canaveral"
};

// API route
app.get("/api/next-launch", (req, res) => {
  res.json({ nextLaunch });
});

// Start the server
app.listen(PORT, () => {
  console.log(`OMNI backend running on port ${PORT}`);
});
