'use strict';

(function ($) {

  $('#quiz-1').on('click', function () {
    $(this).parent().empty();
    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[0];
      console.log(data);
    });
  });

  $('#quiz-2').on('click', function () {
    $(this).parent().empty();
    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[1];
      console.log(data);
    });
  });
})(jQuery);