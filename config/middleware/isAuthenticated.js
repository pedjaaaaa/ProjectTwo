module.exports = function(req, res, next) {
    console.log("Inside isAuthenticated");
    if (req.user) {
        console.log(req.user);
        return next();
    }
    console.log("not authenticated... goto /login");
    return res.redirect("/login");
};