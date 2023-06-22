const db = require("../models");
const Message = db.messages;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.user_text) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const message = {
    user_text: req.body.user_text
  };

  Message.create(message)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the message."
      });
    });
};

exports.findAll = (req, res) => {
  const user_text = req.query.user_text;
  var condition = user_text ? { user_text: { [Op.like]: `%${user_text}%`}} : null;

  Message.findAll({where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving messages."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Message.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Message.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Message with id=${id}. Maybe Message was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Message with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Message.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Messages were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all messages."
      });
    });
};
// const express = require('express');
// const router = express.Router();
// const messageService = require('../src/messageService');

// router.get('/', (req, res) => {
//   messageService.getAllMessages((err, data) => {
//     if(err) {
//       res.status(500).json({
//         message: 'Failed to get messages from the database',
//         error: err.message,
//       });
//     } else {
//       res.status(200).json({
//         message: 'Successfully got messages from the database',
//         data: data,
//       });
//     }
//   });
// });

// router.post('/', (req, res) => {
//   //CHECK IF TEXT IS CORRECT VARIABLE NAME
//   const text = req.body.text;

//   if(!text || text.length > 255) {
//     res.status(400).json({
//       message: 'Invalid text',
//     });
//   } else {
//     messageService.saveMessage(text, (err, data) => {
//       if(err) {
//         res.status(500).json({
//           message: 'Failed to save message to the database',
//           error: err.message,
//         });
//       } else {
//         res.status(201).json({
//           message: 'Successfully saved message to the database',
//           data: data,
//         });
//       }
//     });
//   }
// });

// module.exports = router;