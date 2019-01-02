(function(){

    requirejs.config({
       
        baseUrl:'js/',
        paths: {
            //update:'./modules/update',
            watch:'./modules/watch',
            swiper:'Swiper/dist/js/swiper'
         },
        shim:{
            swiper:{
                deps:[],
                exports:'swiper'
            }
        }
    });
    
   requirejs(['swiper','watch'],function(Swiper,watch){
    function adsData(data, time) {
        var updateTime = time || 5000;
        this.data = data;
        update.updateDateTime();
        watch.watchData();
        setInterval(() => {
          update.updateDateTime();
          watch.watchData();
        }, updateTime);
        return this.swiperItems;
      }
    //update.updateDateTime();
    //watch.watchData();
   })

})();