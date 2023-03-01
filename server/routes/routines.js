const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a single record by id
recordRoutes.route("/routines/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
      .collection("routines")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   recordRoutes.route("/routines").get(function (req, res) {
    let db_connect = dbo.getDb("fitquestdb");
    db_connect
      .collection("routines")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   module.exports = recordRoutes;