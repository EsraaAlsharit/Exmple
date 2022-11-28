const Athlete = require("../models/athletes.model");

module.exports.findAllAthletes = (req, res) => {
  Athlete.find({})
    .then(allDaAthletes => res.json(allDaAthletes))
    .catch(err => res.status(400).json(err));
      //res.json({ message: "Something went wrong", error: err, }));
};

module.exports.findOneSingleAthlete = (req, res) => {
  Athlete.findOne({ _id: req.params.id })
    .then(oneSingleAthlete => res.json(oneSingleAthlete))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAthlete = (req, res) => {
  const { fname, lname, sport, team } =req.body;
  // Athlete.create(req.body)
  Athlete.create({
    fname, lname, sport, team }
  )
    .then(newlyCreatedAthlete => res.json({ Athlete: newlyCreatedAthlete }))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingAthlete = (req, res) => {
  Athlete.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then(updatedAthlete => res.json({ Athlete: updatedAthlete }))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingAthlete = (req, res) => {
  Athlete.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};