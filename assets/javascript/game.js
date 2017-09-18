$(document).ready(function() {


  // will be removed
  // var crystalOptions = [1, 5, 7, 10];

  // !!crystal numbers should be between 1-12
  // !!number should be randomly generated between 19-120
  // function shuffle() {
  //   for (var i = 0; i < crystalOptions.length; i++) {
  //     var rand = Math.floor(Math.random() * (i + 1));
  //     var temp = crystalOptions[i];
  //       crystalOptions[i] = crystalOptions[rand];
  //       crystalOptions[rand] = temp;
  //     }
  //   console.log('Test of shuffle', crystalOptions);
  // }

  function createGame() {
    for (var i = 0; i < 4; i++) {
      var crystalNumber = Math.floor(Math.random() * (19-1))+1;
      var images = $('<img>');
        images.attr('src', 'assets/images/crystal.png');
        images.attr('value', crystalNumber);
        images.addClass('crystal-image');
      $('#crystals').append(images)
      console.log(crystalNumber)
    }

    var compNumber = Math.floor(Math.random() * (120-19)) + 19;
    console.log(compNumber);

  }

  // shuffle();
  createGame();
})