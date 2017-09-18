$(document).ready(function() {

  var crystalOptions = [1, 5, 7, 10];

  function shuffle() {
    for (var i = 0; i < crystalOptions.length; i++) {
      var rand = Math.floor(Math.random() * (i + 1));
      var temp = crystalOptions[i];
        crystalOptions[i] = crystalOptions[rand];
        crystalOptions[rand] = temp;
      }
    console.log('Test of shuffle', crystalOptions);
  }

  function creator() {
    for (var i = 0; i < crystalOptions.length; i++) {
      var images = $('<img>');
        images.attr('src', 'assets/images/crystal.png');
        images.attr('value', crystalOptions[i]);
        images.addClass('crystal-image');
      $('#crystals').append(images)
    }
  }

  shuffle();
  creator();
})