var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// xhr is refrencinf jQuery. as in if the call is not coming from jQuery
router.get("/", function(req, res) {
    burger.all(function(data) {
        if (!req.xhr) {
            res.render("burger/index", { burger: data });
        } else {
            res.render("partials/burger/all", { burger: data, layout: false });
        };
    });
});

router.post("/", function(req, res) {
    burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }, function(data) {
        res.json(data);
    })
});
router.put("/:id", function(req, res) {
    burger.update({ id: req.params.id }, { devoured: req.body.devoured }, function(data) {
        res.json(data);
    });
});

module.exports = router;