var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/main");
        }

        res.sendFile(path.join(__dirname, "../public/signup.html"))
    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect("/main")
        }
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    app.get("/main", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/main.html"))
    });

    app.get("/chat", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chat.html"))
    });
    
    app.get("/chat/:sport", isAuthenticated, function (req, res) {
        console.log(req.params)
        res.sendFile(path.join(__dirname, "../public/chat.html"))
    });

    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"))
    });
};