$(document).ready(function() {
  // !!crystal numbers should be between 1-12
  // !!number should be randomly generated between 19-120

  var userNumber = 0;
  function createGame() {
    var numberArr = [];
    for (var i = 0; i < 4; i++) {
      var crystalNumber = Math.floor(Math.random() * (12-1))+1;
      // debugger;
      var j = false;
      while (numberArr.includes(crystalNumber)){
        crystalNumber = Math.floor(Math.random() * (12-1))+1;
      }
      numberArr.push(crystalNumber);
      // console.log(crystalNumber);
      var images = $('<img>');
        images.attr('src', 'assets/images/crystal.png');
        images.attr('data-value', numberArr[i]);
        images.addClass('crystal-image');
      $('#crystals').append(images)
      console.log(images.attr('data-value'))
    }

    var compNumber = Math.floor(Math.random() * (120-19)) + 19;
    // console.log(compNumber);
    $('#computer-number').text(compNumber);
  }

  $('#crystals').on('click', function() {
    // userNumber += $(this).attr('data-value');
    // parseInt(userNumber);
    console.log($(this).attr('data-value'));
    
  })

  $('#reset').on('click', clear);

  function clear() {
    $('#computer-number').empty();
    $('#user-number').empty();
    $('#crystals').empty();
    createGame();
  }

  createGame();
})