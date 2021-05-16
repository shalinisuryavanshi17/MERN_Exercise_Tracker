const { Router } = require("express");

const router = Router();
const Exercises = require("../models/excercise");

router.route("/").get((req, res) => {
  Exercises.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("error " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const Excercise = new Exercises({ username, description, duration, date });
  Excercise.save()
    .then(() => res.json("excercise added succesfully!!!"))
    .catch((err) => res.status(400).json("error adding excercise " + err));
});

router.route("/:id").get((req, res) => {
  Exercises.findById(req.params.id)
    .then((excercise) => res.json(excercise._id))
    .catch((err) => res.status(400).json("error " + err));
});

router.route("/:id").delete((req, res) => {
  Exercises.findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted excercise successfully!!!"))
    .catch((err) => res.status(400).json("error " + err));
});
router.route("/:name").get((req, res) => {
  Exercises.findOne({ username: req.params.name })
    .then((username) => res.json(username._id))
    .catch((err) => res.status(400).json("error " + err));
});
router.route("/update/:id").post((req, res) => {
  Exercises.findById(req.params.id).then((exercise) => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
    exercise
      .save()
      .then(() => {
        res.json("updated successfully!!!");
      })
      .catch((err) => res.status(400).json("error " + err));
  });
});
module.exports = router;
