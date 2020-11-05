const express = require("express");
const router = express.Router();

//___________________
//Data
//___________________
const Makeup = require("../models/makeup.js");

//___________________
// Routes
//___________________
//localhost:3000
// Welcome / Home Page
router.get("/", (req, res) => {
  res.render("home.ejs");
});

// Index
router.get("/yourCollection", (req, res) => {
  Makeup.find({}, (error, allMakeup) => {
    res.render("index.ejs", {
      makeup: allMakeup,
    });
  });
});

// New
router.get("/yourCollection/new", (req, res) => {
  res.render("new.ejs");
});

// Create
router.post("/yourCollection", (req, res) => {
  if (req.body.buyMore === "on") {
    req.body.buyMore = true;
  } else {
    req.body.buyMore = false;
  }
  Makeup.create(req.body, (error, createdMakeup) => {
    res.redirect("/yourCollection");
  });
});

// Show
router.get("/yourCollection/:id", (req, res) => {
  Makeup.findById(req.params.id, (err, foundMakeup) => {
    res.render("show.ejs", {
      makeup: foundMakeup,
    });
  });
});

// // Edit
router.get("/yourCollection/:id/edit", (req, res) => {
  Makeup.findById(req.params.id, (err, foundMakeup) => {
    res.render("edit.ejs", {
      makeup: foundMakeup,
    });
  });
});

// // Put
router.put("/yourCollection/:id", (req, res) => {
  if (req.body.buyMore === "on") {
    req.body.buyMore = true;
  } else {
    req.body.buyMore = false;
  }
  Makeup.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedMakeup) => {
      res.redirect("/yourCollection");
    }
  );
});

// Delete
router.delete("/yourCollection/:id", (req, res) => {
  Makeup.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/yourCollection");
  });
});

module.exports = router;
