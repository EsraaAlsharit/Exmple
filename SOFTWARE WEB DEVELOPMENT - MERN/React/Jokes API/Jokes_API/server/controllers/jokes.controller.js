const Jokes = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
      .then(allDaJokes => res.json({ Jokes: allDaJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports.findOneSingleJokes = (req, res) => {
	Jokes.findOne({ _id: req.params.id })
		.then(oneSingleJokes => res.json({ Jokes: oneSingleJokes }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
      .then(newlyCreatedJokes => res.json({ Jokes: newlyCreatedJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.updateExistingJokes = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedJokes => res.json({ Jokes: updatedJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };


  module.exports.deleteAnExistingJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  