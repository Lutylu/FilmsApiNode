var express = require("express");
var router = express.Router();
var model = require("../models/index");

/* GET home page. */
router.get("/films", function(req, res, next) {
  model.Films.findAll({})
    .then(films =>
      res.json({
        error: false,
        data: films
      })
    )
    .catch(films =>
      res.json({
        error: true,
        data: [],
        error: error
      })
    );
});

router.post("/film", function(req, res, next) {
  console.log("*****************BORDEL*******************************");
  model.Films.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    url: req.body.url
  })
    .then(films =>
      res.status(201).json({
        error: false,
        data: films,
        message: "Film crée"
      })
    )
    .catch(films =>
      res.status(401).json({
        error: true,
        data: [],
        error: error
      })
    );
});

router.put("/film/:id", function(req, res, next) {
  model.Films.update(
    {
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      url: req.body.url
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(films =>
      res.status(201).json({
        error: false,
        data: films,
        message: "Film mis à jour"
      })
    )
    .catch(films =>
      res.status(401).json({
        error: true,
        data: [],
        error: error
      })
    );
});

router.delete("/film/:id", function(req, res, next) {
  console.log(
    "****************************************************************",
    req.params.id
  );
  model.Films.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(films =>
      res.status(201).json({
        error: false,
        data: films,
        message: "Film supprimé"
      })
    )
    .catch(films =>
      res.status(401).json({
        error: true,
        data: [],
        error: error
      })
    );
});

module.exports = router;
