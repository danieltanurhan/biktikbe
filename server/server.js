const express = require("./app/node_modules/express");
const cors = require('./app/node_modules/cors');

const PORT = process.env.PORT || 3001;
const path = __dirname + '/app/views/';

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

//Access to files for the built react app
app.use(express.static(path));

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");

db.sequelize.sync();

require("./app/routes/messages.routes")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
