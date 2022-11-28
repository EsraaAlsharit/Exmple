const AthleteController = require("../controllers/athletes.controller");

module.exports = app => {
  app.get("/api/athletes/", AthleteController.findAllAthletes);
  app.get("/api/athletes/:id", AthleteController.findOneSingleAthlete);
  app.put("/api/athletes/update/:id", AthleteController.updateExistingAthlete);
  app.post("/api/athletes/new", AthleteController.createNewAthlete);
  app.delete("/api/athletes/delete/:id", AthleteController.deleteAnExistingAthlete);
};