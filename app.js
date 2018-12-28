(function(){

    requirejs.config({
       
        
        paths: {
            shoiwAds:'js/modules/showAds',
            pic:'js/modules/pic',
            swiper:'Swiper/dist/js/swiper'
         },
        shim:{
            swiper:{
                deps:[],
                exports:'swiper'
            }
        }
    });
    
   requirejs(['showAds'],function(showAds){

   })

})();