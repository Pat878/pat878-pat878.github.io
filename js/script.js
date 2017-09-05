$(function() {

  var movies = ["Pulp Fiction", "The Big Lebowski", "No Country For Old Men",
  "O Brother Where Art Thou", "Bronson", "Chopper", "There Will Be Blood"]
  var music = ["The Beatles", "Animal Collective", "The National", "Future Islands",
  "Girls", "Chicano Batman", "Tame Impala"]
  var skills = ["JavaScript", "HTML/CSS", "Ruby", "Git", "SEO", "Bootstrap", "Wordpress"]
  var interests = ["React", "Rails", "Node.JS"]
  var education = ["Bachelor of Arts in English, May 2012", "Master of Science in Human Resource Management, July 2016"]

  education.map(function(school){
    $("#education").append(school + "<br>")

  })

  skills.map(function(skill){
    $("#skills").append("<ul>" + "<li>" + skill + "</li> </ul")

  })

  interests.map(function(interest){
    $("#interests").append("<ul>" + "<li>" + interest + "</li> </ul")

  })

  movies.map(function(movie){
    $("#movies").append("<ul>" + "<li>" + movie + "</li> </ul")
  })

music.map(function(band){
  $("#music").append("<ul>" + "<li>" + band + "</li> </ul")
})
});
