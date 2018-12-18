define(['script','jquery'],function(script,$){
      let msg = 'alerter.js';
      function showMsg(){
            console.log(msg,script.getName());
      }
      $('body').css('background','red');
      return {showMsg}
});