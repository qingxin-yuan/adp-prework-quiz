(function($){
  
  $('#quiz-1').on('click',function(){
    $(this).parent().empty();
    $.getJSON('http://localhost:3000/quizzes',function(data){
    
      console.log(data);

    });
    // $.ajax({
    //   method: 'GET',
    //   dataType:'jsonp',//CORS
    //   url: './src/quiz.json'
    // })
    // .done(function(data){
      
    //   console.log(data);
    // })
// JSON.parse('./src/quiz.json',function(data){

//   console.log(data);
// })

  })
  
  
  
  
  
  
  
})(jQuery);