var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.join(req.user);
    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            res.status(401).json(err);
        });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        req.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};