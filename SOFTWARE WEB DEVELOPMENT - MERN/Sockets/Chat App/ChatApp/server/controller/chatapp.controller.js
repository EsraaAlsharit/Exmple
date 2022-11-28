const ChatApp = require("../model/chatapp.model");

module.exports.findAllChatApps = (req, res) => {
  ChatApp.find({})
    .then(allDaChatApps => res.json(allDaChatApps))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewChatApp = (req, res) => {
  ChatApp.create(req.body)
    .then(newlyCreatedChatApp => res.json({ ChatApp: newlyCreatedChatApp }))
    .catch(err => res.status(400).json(err));
};

