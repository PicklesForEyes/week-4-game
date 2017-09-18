$(document).ready(function() {
  // !!crystal numbers should be between 1-12
  // !!number should be randomly generated between 19-120

  var userNumber = 0;
  function createGame() {
    for (var i = 0; i < 4; i++) {
      var crystalNumber = Math.floor(Math.random() * (19-1))+1;
      var images = $('<img>');
        images.attr('src', 'assets/images/crystal.png');
        images.attr('value', crystalNumber);
        images.addClass('crystal-image');
      $('#crystals').append(images)
    }

    var compNumber = Math.floor(Math.random() * (120-19)) + 19;
    // console.log(compNumber);
    $('#computer-number').text(compNumber);
  }

  $('#crystals').on('click', function() {
    userNumber += $(this).value;
    $('#user-number').text(userNumber)
  })

  function clear() {
    $('#computer-number').empty();
    $('#user-number').empty();
    $('#crystals').empty();
    createGame();
  }

  createGame();
})