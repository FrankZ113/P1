define(['pic','swiper'],function(pic,Swiper){
      let msg = 'pic.js';
      function showMsg(){
            console.log(msg,pic.getSwiper());
      }
      $('body').css('background','red');
      return {showMsg}
});