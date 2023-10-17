const express = require("express");
const app = express();

// Create a new pet and save it to the database
app.post("/api/pets", async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: "Could not save the pet to the database." });
  }
});

// Retrieve all pets from the database
app.get("/api/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch pets from the database." });
  }
});
