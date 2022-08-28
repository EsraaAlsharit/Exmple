const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String
});

const Joke = mongoose.model("Jokes_API", JokeSchema);

module.exports = Joke;