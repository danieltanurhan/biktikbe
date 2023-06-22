module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("message", {
    user_text: {
      type: Sequelize.STRING
    }
  });

  return Message;
};