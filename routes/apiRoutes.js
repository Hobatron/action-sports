const db = require("../model");
const axios = require('axios');
const moment = require("moment");
const bodyParser = require("body-parser")


module.exports = function (app) {

    // Google Map API route
    app.get('/api/maps', (req, res) => {
        let queryReviewURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJVZiQSzr4wIcR6DwKBkAZodA&key=AIzaSyDK47iRJeeV1kj_xv-U2ZoPO-Lk7UnVyHM"

        axios({
                method: 'get',
                url: queryReviewURL
            })
            .then(function (response) {
                res.json(response.data);
            });
    });

    /*********User API Routes***********/
    // Post user data
    app.post("/api/user", function (req, res) {
        db.User.create({
            name: req.body.name,
            interests: req.body.interests,
            email: req.body.email,
            rsvp: req.body.rsvp
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get all users
    app.get("/api/user", function (req, res) {
        db.User.find({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    app.get("/api/user/:interestQuery", function (req, res) {
        db.User.find({
            interests: req.params.interestQuery
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete user
    app.delete("/api/user/:id", function (req, res) {
        db.User.deleteOne({
            _id: req.params.id
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete all users
    app.delete("/api/user", function (req, res) {
        db.User.deleteMany({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    /*********Calendar API Routes***********/

    // Post new event
    app.post("/api/calendar", function (req, res) {
        let date = req.body.date.split('-');
        date = date[1] + '/' + date[2] + '/' + date[0]
        db.Calendar.create({
            title: req.body.eventTitle,
            start: date,
            startTime: req.body.time,
            description: req.body.description,
            cost: req.body.cost,
            repeat: req.body.repeat,
            eventType: req.body.eventType
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get all events
    app.get("/api/calendar", function (req, res) {
        db.Calendar.find({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get events for specific event types
    app.get("/api/calendar/eventType", function (req, res) {
        db.Calendar.find({
            eventType: req.body.eventType
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get one event
    app.get("/api/calendar/:id", function (req, res) {
        db.Calendar.findOne({
            _id: req.params.id
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get future events happening
    app.get("/api/weeklyCal", function (req, res) {
        const week = [];
        for (let i = 0; i <= 6; i++) {
            db.Calendar.find({
                start: moment().add(i, "days").format("L")
            }).then(function (dayEvent) {
                if (dayEvent.length > 0) {
                    week.push(dayEvent);
                }
                if (i == 6) {
                    res.json(week);
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    });

    // Update events with same title
    app.put("/api/calendar", function (req, res) {
        db.Calendar.update({
            eventTitle: req.body.eventTitle
        }, {
            $set: {
                eventTitle: req.body.eventTitle,
                startDate: req.body.date,
                startTime: req.body.time,
                description: req.body.description,
                cost: req.body.cost,
                repeat: req.body.repeat
            }
        }, {
            multi: true
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Update one event
    app.put("/api/calendar/:id", function (req, res) {
        db.Calendar.update({
            _id: req.params.id
        }, {
            $set: {
                eventTitle: req.body.eventTitle,
                startDate: req.body.date,
                startTime: req.body.time,
                description: req.body.description,
                cost: req.body.cost,
                repeat: req.body.repeat
            }
        }, {
            multi: true
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete one Event
    app.delete("/api/calendar/:id", function (req, res) {
        db.Calendar.deleteOne({
            _id: req.params.id
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete all events
    app.delete("/api/calendar", function (req, res) {
        db.Calendar.deleteMany({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });


    /*********BuyList API Routes***********/

    // Post the buy list
    app.post("/api/buylist", function (req, res) {
        db.BuyList.create(req.body).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get the buy list
    app.get("/api/buylist", function (req, res) {
        db.BuyList.find({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Update the buy list
    app.put("/api/buylist/:id", function (req, res) {
        db.BuyList.update({
            _id: req.params.id
        }, {
            $set: {
                price: req.body.price,
                quantity: req.body.quantity,
                cardName: req.body.cardName
            }
        }, {
            multi: true
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete an item on buy list
    app.delete("/api/buylist/:id", function (req, res) {
        db.BuyList.deleteOne({
            _id: req.params.id
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete entire buy list
    app.delete("/api/buylist", function (req, res) {
        db.BuyList.deleteMany({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    /*********Carousel API Routes***********/

    // Post carousel pics
    app.post("/api/carousel", function (req, res) {
        db.Carousel.create({
            image: req.body.urlImage || req.body.localImage,
            description: req.body.description,
            color: req.body.color || "white",
            fileName: req.body.fileName
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Get all carousel pics
    app.get("/api/carousel", function (req, res) {
        db.Carousel.find({}).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });

    // Delete a carousel
    app.delete("/api/carousel/:id", function (req, res) {
        db.Carousel.deleteOne({
            _id: req.params.id
        }).then(function (response) {
            res.json(response);
        }).catch(function (err) {
            console.log(err);
        });
    });
}