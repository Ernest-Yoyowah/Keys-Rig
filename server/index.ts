import express from "express";
import next from "next";
import connectMongoDB from "./lib/mongodb";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

const server = express();

app.prepare().then(() => {
  // Connect to MongoDB
  connectMongoDB();

  // Middleware to handle Next.js requests
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
