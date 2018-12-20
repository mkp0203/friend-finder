var friendData = require("../data/friendData");
var path = require("path");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {

    var newFriend = req.body;
    var totalDifference = 0;
    var allDifferences = [];
    for (var i = 0; i < friendData.length; i++) {
      console.log(friendData[i].name);[]

      for (var j = 0; j < 10; j++) {

        totalDifference += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
      }

      allDifferences.push(totalDifference);
      totalDifference = 0;
    }

    var bestMatch = friendData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
    console.log(bestMatch)
    res.send(bestMatch);
  });
};
