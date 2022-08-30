const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [3, "name min length is 3"]
	}
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;