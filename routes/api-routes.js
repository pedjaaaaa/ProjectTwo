var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        console.log("this ran");
        res.json(req.user);
    });

    app.post("/api/signup", function (req, res) {
        console.log("sign up ran.")
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
             res.redirect(302, "/login");
        }).catch(function (err) {
             res.status(500).json(err);
        });
    });

    app.get("/logout", function (req, res) {
        req.logout();
         res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        console.log(req.session.passport.user)
        if (!req.user) {
             res.json({});
        } else {
             res.json({
                email: req.user.email,
                username: req.user.username,
                id: req.user.id
            });
        }
    });
};