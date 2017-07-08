$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $("#about_us").hide();
    $("#menu").hide();
    $('.collapsible').collapsible('open', 0);
    $('a[href^="#content"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-100 }, 1000);
      return false;
    });
  })
  $("#about_us_button").click(function(){
    $("#menu").hide(1000);
    $("#about_us").toggle(1000);
  })
  $("#location_button").click(function(){
    $("#menu").hide(1000);
    $("#about_us").hide(1000);

  })
  $("#menu_button").click(function(){
    $("#about_us").hide(1000);
    $("#menu").toggle(1000);
    $('.collapsible').collapsible('open', 0);
  })
  $("#about_us_button_mobile").click(function(){
    $("#menu").hide(1000);
    $("#about_us").toggle(1000);
  })
  $("#location_button_mobile").click(function(){
    $("#menu").hide(1000);
    $("#about_us").hide(1000);

  })
  $("#menu_button_mobile").click(function(){
    $("#about_us").hide(1000);
    $("#menu").toggle(1000);
    $('.collapsible').collapsible('open', 0);
  })
  var mymap = L.map('mapid').setView([41.812431, -87.974784], 16);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    scrollWheelZoom:false,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmFsY29uMjIiLCJhIjoiY2oxenl3bHlwMDNueDJ3cDg5b3NwOW1qNCJ9.nFAkSZ3PJuJNQtKYNt6aHQ'
  }).addTo(mymap);
  var marker = L.marker([41.812431, -87.974784]).addTo(mymap);