$(document).ready(function() {
  $('#catContainer button').click(function() {
    $('#catContainer').append('<p>MEOW</p>')
    $('#dogContainer').append('<p>BARK BACK</p>')
    $('#catContainer').children("p").last().click(function() {
      $(this).remove();
    });
    $('#dogContainer').children("p").last().click(function() {
      $(this).remove();
    });
  });

  $("#dogContainer button").click(function() {
    $('#dogContainer').append('<p>WOOF</p>')
    $('#catContainer').append('<p>HISS BACK</p>')
    $('#dogContainer').children("p").last().click(function() {
      $(this).remove();
    });
    $('#catContainer').children("p").last().click(function() {
      $(this).remove();
    });
  });

});

