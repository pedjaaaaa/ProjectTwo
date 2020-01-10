var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8081;
var router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var server = require('http').Server(app);
var io = require('socket.io')(server);
app.io = io;


io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    socket.broadcast.emit('Hi all');

    // socket.on('register', handelRegister)

    // socket.on('join', handleJoin)

    // socket.on('leave', handleLeave)

    // socket.on('message', handleMessage)

    // socket.on('chatrooms', handleGetChatrooms)

    // socket.on('disconnect', function () {
    //     console.log('user disconnected', client.id);
    //     handleDisconnect()
    // })

    // socket.on('error', function (err) {
    //     console.log('received error from client:', client.id)
    //     console.log(err)
    // })
});

db.sequelize.sync({ force: true }).then(function () {
    server.listen(PORT, function () {
        console.log("Visit http://localhost:" + PORT + "/ in your broswer");
    });
});





