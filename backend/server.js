const express = require("express");

const app = express();
const PORT = 3001;

// Allow the server to read JSON request bodies
app.use(express.json());

// Temporary workshop data
const workshops = [
  {
    id: 1,
    title: "Candle Making Workshop",
    location: "Linz",
    price: 29,
  },
  {
    id: 2,
    title: "Italian Cooking Workshop",
    location: "Vienna",
    price: 49,
  },
  {
    id: 3,
    title: "Pottery Workshop",
    location: "Linz",
    price: 39,
  },
];

// GET endpoint
app.get("/api/workshops", (req, res) => {
  res.json(workshops);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});