const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image_url: { type: String },
    description: { type: String },
    imdb_link: { type: String },
    release_date: { type: Date },
    budget: { type: Number },
    bet_options: { 
        type: Map, 
        of: Boolean, 
        default: { "1st_day": true, "weekend": false } 
    },
    result_date: { type: Date },
    last_bet_time: { type: Date },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Movie", MovieSchema);
