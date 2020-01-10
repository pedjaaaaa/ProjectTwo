var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", function(req, res) {
        if (req.user) {
            res.redirect("/sports");
        }
        res.sendFile(path.join(__dirname, "../public/main.html"))
    });

    app.get("/signup", function(req, res) {
        if (req.user) {
            res.redirect("/sports")
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    });

    app.get("/login", function(req, res) {
        if (req.user) {
            res.redirect("/sports")
        }
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    app.get("/chat", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/chat.html"))
    });
};