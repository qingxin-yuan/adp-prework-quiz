'use strict';

// import { setTimeout } from "timers";

var i = 0,
    score = 0;

(function ($) {

  $('#quiz-1').on('click', function () {

    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[0];
      console.log(data);

      $('h1').css('font-size', '3rem').before('<p>Score: ' + score + '</p>');

      $('ul').addClass('quiz-content');

      question(data.questions);
    });
  });

  $('#quiz-2').on('click', function () {

    $.getJSON('http://localhost:3000/quizzes', function (data) {

      data = data[1];
      console.log(data);

      $('h1').css('font-size', '3rem').before('<p>Score: ' + score + '</p>');

      $('ul').addClass('quiz-content');

      question(data.questions);
    });
  });
})(jQuery);

var question = function question(questions) {

  $('h1').text(questions[i].question);

  $('ul').empty();

  questions[i].answers.forEach(function (answer) {
    $('ul').append('<li>' + answer.content + '</li>');

    if (answer.value) {
      $('li:last-child').addClass('correct-answer');
    }
  });

  // function to upddate score
  $('.correct-answer').on('click', function () {

    score++;

    $('p').text('Score: ' + score);
  });

  //function to add feedback border in response to choice selected
  $('li').on('click', function (event) {

    if ($(event.target).hasClass('correct-answer')) {

      $(event.target).css('border', '5px solid green');
    } else {

      $(event.target).css('border', '5px solid red');
    }

    //update number of finished quiz questions
    i++;

    if (i < questions.length) {
      //display next question with 2s delay
      setTimeout(function () {
        question(questions);
      }, 2000);
    } else {

      $('p').addClass('total-score');
      setTimeout(function () {
        result(score, questions.length);
      }, 2000);
    }
  });
}; //end of question function


var result = function result(goal, numQuestion) {

  $('h1').text('');
  $('ul').empty();

  if (goal / numQuestion < 0.5) {

    $('h1').prepend('Sorry, you failed :(');
  } else {

    $('h1').prepend('Yay, you Passed!');
  }

  $('p').addClass('result').append(' out of ' + numQuestion);
}; //end of result function