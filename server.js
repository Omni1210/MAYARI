import express from "express";
import nextLaunchRoute from "./next-launch.js";

const app = express();

// Optional: enable JSON parsing if you plan to accept POST requests later
app.use(express.json());

// Mount your API route
app.use("/api", nextLaunchRoute);

// Start the server
app.listen(3000, () => {
  console.log("OMNI backend running on http://localhost:3000");
});
