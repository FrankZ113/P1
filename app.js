(function(){

    requirejs.config({
       
        baseUrl:'js/',
        paths: {
            update:'./modules/update',
            watch:'./modules/watch',
            swiper:'./libs/swiper'
         },
        shim:{
            swiper:{
                deps:[],
                exports:'swiper'
            }
        }
    });
    
   requirejs(['swiper','update','watch'],function(swiper,updateDateTime,watchData){
    let date = undefined;
    let time = undefined;
    let data = {};
    let swiperItems = [];
    update.updateDateTime();
    watch.watchData();
   })

})();