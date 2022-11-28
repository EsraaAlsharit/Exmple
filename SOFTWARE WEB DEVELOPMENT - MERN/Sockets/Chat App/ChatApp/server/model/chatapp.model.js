
const mongoose = require("mongoose");

const ChatAppSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "name is required"],
		minlength: [2, "name min length is 2"]
	},	massage: {
		type: String,
		required: [true, "name is required"]
	}
}, { timestamps: true });

const ChatApp = mongoose.model("ChatApp", ChatAppSchema);

module.exports = ChatApp;