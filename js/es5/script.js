'use strict';

// import { setTimeout } from "timers";

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

  $('li').on('click', function (event) {

    if ($(event.target).hasClass('correct-answer')) {
      // console.log($(event.target));
      $(event.target).css('border', '5px solid green');
    } else {
      // console.log('red');
      $(event.target).css('border', '5px solid red');
    }

    i++;

    if (i < questions.length) {
      setTimeout(function () {
        question(questions);
      }, 2000);
    } else {
      // console.log(score,i);
      setTimeout(function () {
        result(score, questions.length);
      }, 2000);
    }
  });

  //update score every time correct answer is selected

}; //end of question function


var result = function result(goal, numQuestion) {

  $('h1').text('');
  $('ul').empty();

  // console.log(numQuestion);

  if (goal / numQuestion < 0.5) {
    // console.log(goal);
    // console.log(!!((goal/numQuestion)<0.5));
    $('h1').prepend('Sorry, you failed');
  } else {
    // console.log('yay');
    $('h1').prepend('Congrats, you Passed!');
  }

  $('p').addClass('result');
}; //end of result function