const express = require("express");

const app = express();
const PORT = 3001;

// Parse incoming JSON request bodies
app.use(express.json());

// Temporary workshop data
let workshops = [
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

// GET - Read all workshops
app.get("/api/workshops", (req, res) => {
  res.json(workshops);
});

// POST - Create a workshop
app.post("/api/workshops", (req, res) => {
  const { title, location, price } = req.body;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof location !== "string" ||
    !location.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      message: "Valid title, location and price are required.",
    });
  }

  const newWorkshop = {
    id: Math.max(0, ...workshops.map((workshop) => workshop.id)) + 1,
    title: title.trim(),
    location: location.trim(),
    price,
  };

  workshops.push(newWorkshop);

  res.status(201).json(newWorkshop);
});

// PUT - Update a workshop
app.put("/api/workshops/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, location, price } = req.body;

  const workshop = workshops.find((item) => item.id === id);

  if (!workshop) {
    return res.status(404).json({
      message: "Workshop not found.",
    });
  }

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof location !== "string" ||
    !location.trim() ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      message: "Valid title, location and price are required.",
    });
  }

  workshop.title = title.trim();
  workshop.location = location.trim();
  workshop.price = price;

  res.json(workshop);
});

// DELETE - Delete a workshop
app.delete("/api/workshops/:id", (req, res) => {
  const id = Number(req.params.id);

  const workshop = workshops.find((item) => item.id === id);

  if (!workshop) {
    return res.status(404).json({
      message: "Workshop not found.",
    });
  }

  workshops = workshops.filter((item) => item.id !== id);

  res.json({
    message: "Workshop deleted successfully.",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});