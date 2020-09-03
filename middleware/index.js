// all middlewares are here
var Event = require("../models/event");
var Comment = require("../models/comment");

// declare a empty middleware object
var middlewareObj = {};

// middleware to detect if the user is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
        return next();

    // send flash message for the next request if error
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
}

// middleware to detect errors in login form
middlewareObj.checkLogInForm = function(req, res, next) {
    if (req.body.username && req.body.password) {
        return next();
    } else {
        // send flash message for the next request if error
        req.flash("error", "You need to fill in both the Credentials");
        res.redirect("/login");
    }
}

// middleware to detect errors in register form
middlewareObj.checkRegisterForm = function(req, res, next) {
    if (!(req.body.username && req.body.password && req.body.repassword)) {
        // send flash message for the next request if error
        req.flash("error", "You need to fill all the fields of the form");
        res.redirect("/register");
    } else if (req.body.password != req.body.repassword) {
        // send flash message for the next request if error
        req.flash("error", "Re-typedPassword doesn't match, Please Try Again!");
        res.redirect("/register");
    } else {
        return next();
    }
}

// middleware to check if the user has the event ownership
middlewareObj.checkEventOwnership = function(req, res, next) {
    // is user logged in
    if (req.isAuthenticated()) {
        // find the event with the requested id
        Event.findById(req.params.id, function(err, foundEvent) {
            if (err) {
                req.flash("error", "Event not found!");
                res.redriect("back");
            } else {
                // does the user own the event?
                if (foundEvent.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that!");
                    res.redirect("back");
                }
            }
        });
    } else {
        // send flash notification to user to log in first
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
}

// middleware to check if the user has the comment ownership
middlewareObj.checkCommentOwnership = function(req, res, next) {
    // is user logged in
    if (req.isAuthenticated()) {
        // find the event with the requested id
        Comment.findById(req.params.comment_id, function(err, foundComment) {
            if (err) {
                res.redriect("back");
            } else {
                // does the user own the comment?
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that!");
                    res.redirect("back");
                }
            }
        });
    } else {
        // send flash notification to user to log in first
        req.flash("error", "You don't have permission to do that!");
        res.redirect("back");
    }
}

module.exports = middlewareObj;