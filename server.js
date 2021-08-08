const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const cors = require("cors");


const databasePath = path.join(__dirname, "parameters.sqlite3");

const app = express();

app.use(cors());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3008, () =>
      console.log("Server Running at http://localhost:3008/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get('/parameters/', async (req, res) => {
  const getParams = `
    SELECT 
      * 
    FROM 
      parameters;`;
  const parametersInfo = await database.all(getParams);
  res.send(JSON.stringify(parametersInfo));
})