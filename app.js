(function(){

    requirejs.config({
       
        baseUrl:'js/',
        paths: {
            //update:'./modules/update',
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
    
   requirejs(['swiper','watch'],function(swiper,updateDateTime,watchData){
    function adsData(data, time) {
        let updateTime = time || 5000;
        this.data = data;
        this.update.updateDateTime();
        this.watchData();
        setInterval(() => {
          this.updateDateTime();
          this.watchData();
        }, updateTime);
        return this.swiperItems;
      }
    //update.updateDateTime();
    //watch.watchData();
   })

})();