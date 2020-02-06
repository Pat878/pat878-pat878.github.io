$(function() {
  var movies = [
    "Pulp Fiction",
    "The Big Lebowski",
    "No Country For Old Men",
    "O Brother Where Art Thou",
    "Bronson",
    "Chopper",
    "There Will Be Blood"
  ];
  var music = [
    "The Beatles",
    "Animal Collective",
    "The National",
    "Future Islands",
    "Girls",
    "Chicano Batman",
    "Tame Impala"
  ];
  var skills1 = ["JavaScript", "Ruby", "Python"];
  var skills2 = ["Git", "AWS", "React"];
  var education = [
    "Bachelor of Arts in English, May 2012",
    "Master of Science in Human Resource Management, July 2016"
  ];

  education.map(function(school) {
    $("#education").append(school + "<br>");
  });

  skills1.map(function(skill1) {
    $("#skills1").append("<ul>" + "<li>" + skill1 + "</li> </ul");
  });

  skills2.map(function(skill2) {
    $("#skills2").append("<ul>" + "<li>" + skill2 + "</li> </ul");
  });

  movies.map(function(movie) {
    $("#movies").append("<ul>" + "<li>" + movie + "</li> </ul");
  });

  music.map(function(band) {
    $("#music").append("<ul>" + "<li>" + band + "</li> </ul");
  });
});
