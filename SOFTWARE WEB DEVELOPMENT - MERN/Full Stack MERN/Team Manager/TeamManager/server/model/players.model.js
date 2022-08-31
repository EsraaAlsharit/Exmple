const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name min length is 2"]
	},position:{
		type: String
	}
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;