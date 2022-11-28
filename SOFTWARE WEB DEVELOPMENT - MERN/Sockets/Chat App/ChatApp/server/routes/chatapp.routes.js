const ChatAppController = require("../controller/chatapp.controller");

module.exports = app => {
  app.get("/api/chatapps", ChatAppController.findAllChatApps);
  app.post("/api/chatapps/new", ChatAppController.createNewChatApp);
};