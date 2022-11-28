
const mongoose = require("mongoose");

const ChatAppSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name min length is 2"]
	}
}, { timestamps: true });

const ChatApp = mongoose.model("ChatApp", ChatAppSchema);

module.exports = ChatApp;