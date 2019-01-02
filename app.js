(function(){

    requirejs.config({ //配置基本路径
       
        baseUrl:'js/',
        paths: {
            update:'./modules/update',
            watch:'./modules/watch',
            swiper:'Swiper/dist/js/swiper'
         },
        shim:{ //引入非AMD模块化规范的js源文件
            swiper:{
                deps:[],
                exports:'swiper'
            }
        }
    });
    
   requirejs(['watch','update'],function(watch,update){
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