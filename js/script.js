let i = 0,
score = 0;

(function($){
  
  $('#quiz-1').on('click',()=>{
    
    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
    data = data[0];
    console.log(data);
    question(data.questions);
    $('h1').before(`<p>Score: ${score}</p>`);
  });
  
})


  $('#quiz-2').on('click',()=>{

    $.getJSON('http://localhost:3000/quizzes',(data)=>{
    
      data = data[1];
      console.log(data);
      question(data.questions);
      $('h1').before(`<p>Score: ${score}</p>`);
    
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
  
  
  $('li').on('click',()=>{
    
    i++;
    
    if(i<questions.length){
      question(questions);
    }
    else{
      result(score, questions.length);
    }
    
  })
  
  //update score every time correct answer is selected
  $('.correct-answer').on('click',()=>{
    
    score ++;
    
    $('p').text(`Score: ${score}`);
  })
  
  
}//end of question function


const result = (score, numQuestion)=>{
  
  $('h1').text('');
  $('ul').empty();
  
  if (score/numQuestion<0.5){
    $('h1').before(`<p>Sorry, you failed</p>`)
  }
  else{
    $('h1').before(`<p>Congrats, you Passed!</p>`)
  }
  
  $('p').addClass('result');
}//end of result function