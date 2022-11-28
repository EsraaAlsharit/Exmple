const mongoose = require("mongoose");

const AthleteSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: [true, "First name is required"]
	},
    lname: {
		type: String,
		required: [true, "Last name is required"]
	}
    , sport:{
		type: String
	}, team:{
		type: String
	}
}, { timestamps: true });

const Athlete = mongoose.model("Athletes", AthleteSchema);

module.exports = Athlete;