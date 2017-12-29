// import { setTimeout } from "timers";

let i = 0,
score = 0;

(function($){
  
  $('#quiz-1').on('click',()=>{
    
    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
    data = data[0];
    console.log(data);
    
    $('h1').before(`<p>Score: ${score}</p>`);

    question(data.questions);
  });
  
})


  $('#quiz-2').on('click',()=>{

    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
      data = data[1];
      console.log(data);
      
      $('h1').before(`<p>Score: ${score}</p>`);

      question(data.questions);
      
    
    });
  })

})(jQuery);



const question = (questions)=>{
  
  $('h1').text(questions[i].question)
  
  $('.main-content').empty();
  
  questions[i].answers.forEach(answer=>{
    $('.main-content').append(`<li>${answer.content}</li>`);
    
    if (answer.value){
      $('li:last-child').addClass('correct-answer');
    }

  });


  $('.correct-answer').on('click',()=>{
    
    score ++;
    
    $('p').text(`Score: ${score}`);
  })
  
  $('li').on('click',(event)=>{
    
    if ($(event.target).hasClass('correct-answer')){
      // console.log($(event.target));
      $(event.target).css('border','5px solid green');
    }
    else{
      // console.log('red');
      $(event.target).css('border','5px solid red');
    }


    i++;
    
    if(i < questions.length){
      setTimeout(()=>{question(questions)}, 2000);
      
    }
    else{
      // console.log(score,i);
      setTimeout(()=>{result(score, questions.length)}, 2000);
    }
    
  })
  
  //update score every time correct answer is selected
  
  
  
}//end of question function


const result = (goal, numQuestion)=>{
  
  $('h1').text('');
  $('ul').empty();
  
  // console.log(numQuestion);

  if ((goal/numQuestion)<0.5){
    // console.log(goal);
    // console.log(!!((goal/numQuestion)<0.5));
    $('h1').prepend(`Sorry, you failed`);
  }
  else{
    // console.log('yay');
    $('h1').prepend(`Congrats, you Passed!`);
  }
  
  $('p').addClass('result');
}//end of result function