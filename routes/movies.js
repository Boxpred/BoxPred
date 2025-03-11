const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

router.post("/movies/add", async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
