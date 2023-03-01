const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const routineRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a single record by id
routineRoutes.route("/routines/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("routines")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

// This section will help you get a list of all the records.
routineRoutes.route("/routines").get(function (req, res) {
    let db_connect = dbo.getDb("fitquestdb");
    db_connect
      .collection("routines")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

// This section will help you create a new record.
routineRoutes.route("/routines/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    routines: req.body.routines,
    askAI: req.body.askAI,
  };
  db_connect.collection("routines").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 });

 // This section will help you delete a record
routineRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("routines").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 routine deleted");
    response.json(obj);
  });
 });
  

   module.exports = routineRoutes;