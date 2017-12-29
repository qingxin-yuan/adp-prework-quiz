'use strict';

var i = 0,
    score = 0;

(function ($) {

  $('#quiz-1').on('click', function () {

    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[0];
      console.log(data);

      $('h1').before('<p>Score: ' + score + '</p>');

      question(data.questions);
    });
  });

  $('#quiz-2').on('click', function () {

    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[1];
      console.log(data);

      $('h1').before('<p>Score: ' + score + '</p>');

      question(data.questions);
    });
  });
})(jQuery);

var question = function question(questions) {

  $('h1').text(questions[i].question);

  $('.main-content').empty();

  questions[i].answers.forEach(function (answer) {
    $('.main-content').append('<li>' + answer.content + '</li>');

    if (answer.value) {
      $('li:last-child').addClass('correct-answer');
    }
  });

  $('.correct-answer').on('click', function () {

    score++;

    $('p').text('Score: ' + score);
  });

  $('li').on('click', function () {

    i++;

    if (i < questions.length) {
      question(questions);
    } else {
      console.log(score, i);
      result(score, questions.length);
    }
  });

  //update score every time correct answer is selected

}; //end of question function


var result = function result(goal, numQuestion) {

  $('h1').text('');
  $('ul').empty();

  // console.log(numQuestion);

  if (goal / numQuestion < 0.5) {
    console.log(goal);
    console.log(!!(goal / numQuestion < 0.5));
    $('h1').prepend('Sorry, you failed');
  } else {
    // console.log('yay');
    $('h1').prepend('Congrats, you Passed!');
  }

  $('p').addClass('result');
}; //end of result function