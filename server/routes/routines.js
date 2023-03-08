const express = require("express"); 
const routineRoutes = express.Router(); 
const dbo = require("../db/conn"); 
const ObjectId = require("mongodb").ObjectId;

// This section will get a single routine by id
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

// This section will get a list of all the routines.
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

// This section will create a new routine.
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

 // This section will delete a routine
routineRoutes.route("/delete-routine/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("routines").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 routine deleted");
    response.json(obj);
  });
 });
  

   module.exports = routineRoutes;