module.exports = app => {
  const messages = require("../controllers/message.controller");
  var router = require("express").Router();

  // Create a new message
  router.post("/", messages.create);
  
  // Retrieve all messages
  router.get("/", messages.findAll);

  // Retrieve a single message
  router.get("/:id", messages.findOne);

  // Delete a single message with id
  router.delete("/:id", messages.delete);

  // Delete all messages
  router.delete("/", messages.deleteAll);

  app.use('/api/messages', router);
}