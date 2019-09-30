$('li').click(function() {
  if ($(this).css('color') === 'rgb(128, 128, 128)') {
    $(this).css({
      color: 'black',
      textDecoration: 'none'
    });
  } else {
    $(this).css({
      color: 'gray',
      textDecoration: 'line-through'
    });
  }
});
$('#semangat').append(
  "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
);
// lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
$('ul').on('click', 'li', function() {
  //  code Here...
  $(this).toggleClass("completed");

  
});

$("#plus").click(function(){
    //grabbing new todo text from input
    var todoText = $("#inputData").val();
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
});

// buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
//  code Here...
