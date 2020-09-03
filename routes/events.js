var express = require("express");
var router = express.Router();
var Event = require("../models/event");
var middleware = require("../middleware");

// INDEX -- view all events, GET route
router.get("/", function(req, res) {
    // get all events data from Datebase
    Event.find({}, function(err, allEvents) {
        if (err) {
            console.log(err);
        } else {
            res.render("events/index", { events: allEvents, currentUser: req.user });
        }
    });
});

// CREATE -- create new event, POST route 
router.post("/", middleware.isLoggedIn, function(req, res) {
    // get data from the form
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newEvent = { name: name, price: price, image: image, description: desc, author: author };

    // create a new event and save it to the Database
    Event.create(newEvent, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            // redirect to the events route
            res.redirect("/events");
        }
    });
});

// NEW -- new events form, GET route
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("events/new");
});

// SHOW -- display info about a specific event, GET route
router.get("/:id", function(req, res) {
    // find the event with provided ID
    Event.findById(req.params.id).populate("comments").exec(function(err, foundEvent) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundEvent);
            // render the show template with the foundEvent
            res.render("events/show", { event: foundEvent });
        }
    });
});

// EDIT event route
router.get("/:id/edit", middleware.checkEventOwnership, function(req, res) {
    // find the event with the requested id
    Event.findById(req.params.id, function(err, foundEvent) {
        if (err)
            console.log(err);
        // parse foundEvent to the edit template and render it
        res.render("events/edit", { event: foundEvent });
    });
});

// UPDATE event route
router.put("/:id", middleware.checkEventOwnership, function(req, res) {
    // find and update the correct event
    Event.findByIdAndUpdate(req.params.id, req.body.event, function(err, updatedEvent) {
        // redirect to event page or page with specific id
        if (err) {
            res.redirect("/events");
        } else {
            res.redirect("/events/" + req.params.id);
        }
    });
});

// DESTROY event route
router.delete("/:id", middleware.checkEventOwnership, function(req, res) {
    // delete a event with given id and redirect to camprgounds page
    Event.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/events");
        } else {
            res.redirect("/events");
        }
    });
});

// export the router module
module.exports = router;