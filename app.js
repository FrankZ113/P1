(function(){

    requirejs.config({
       
        baseUrl: 'js/',
        paths: {
            script:'./modules/script',
            alerter:'./modules/alerter',
            jquery:'./libs/jquery-3.3.1'
        }
    });

   requirejs(['alerter'],function(alerter){
       alerter.showMsg();
   })

})()