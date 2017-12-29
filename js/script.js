let i = 0,
score = 0;

(function($){
  
  $('#quiz-1').on('click',()=>{
    
    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
    data = data[0];
    console.log(data);
    
    $('h1').css('font-size', '3rem').before(`<p>Score: ${score}</p>`);

    $('ul').addClass('quiz-content');

    question(data.questions);
  });
  
})


  $('#quiz-2').on('click',()=>{

    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
      data = data[1];
      console.log(data);
      
      $('h1').css('font-size', '3rem').before(`<p>Score: ${score}</p>`);

      $('ul').addClass('quiz-content');

      question(data.questions);
      
    
    });
  })

})(jQuery);



const question = (questions)=>{
  
  $('h1').text(questions[i].question)
  
  $('ul').empty();
  
  questions[i].answers.forEach(answer=>{
    $('ul').append(`<li>${answer.content}</li>`);
    
    if (answer.value){
      $('li:last-child').addClass('correct-answer');
    }

  });

  // function to upddate score
  $('.correct-answer').on('click',()=>{
    
    score ++;
    
    $('p').text(`Score: ${score}`);
  })
  

  //function to add feedback border in response to choice selected
  $('li').on('click',(event)=>{
    

    if ($(event.target).hasClass('correct-answer')){
     
      $(event.target).css('border','5px solid green');
    }
    else{
     
      $(event.target).css('border','5px solid red');
    }

    //update number of finished quiz questions
    i++;
    
    if(i < questions.length){
      //display next question with 2s delay
      setTimeout(()=>{question(questions)}, 2000);
      
    }
    else{
  
      $('p').addClass('total-score');
      setTimeout(()=>{result(score, questions.length)}, 2000);
    }
    
  })
  
}//end of question function


const result = (goal, numQuestion)=>{
  
  $('h1').text('');
  $('ul').empty();

  if ((goal/numQuestion)<0.5){
  
    $('h1').prepend(`Sorry, you failed :(`);
  }
  else{

    $('h1').prepend(`Yay, you Passed!`);
  }
  
  $('p').addClass('result').append(` out of ${numQuestion}`);
}//end of result function