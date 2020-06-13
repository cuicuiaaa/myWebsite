var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/portfolio/codingQuizChallenge", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/codingQuizChallenge"));
    });

    app.get("/portfolio/moodyDrinks", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/moodyDrinks.html"));
    });

    app.get("/portfolio/whatschat", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/whatschat.html"));
    });

    app.get("/portfolio/workDayScheduler", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/workDayScheduler.html"));
    });
}