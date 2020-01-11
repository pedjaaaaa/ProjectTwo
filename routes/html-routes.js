var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/index");
        }
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/main")
        }
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    app.get("/logout", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/logout.html"))
    });

    app.get("/main", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"))
    });

    app.get("/chat", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chat.html"))
    });

    
};