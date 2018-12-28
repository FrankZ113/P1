define(['swiper'],function(Swiper){
    
    let mySwiper = new Swiper(".swiper-container",{
        autoplay:1000,
        loop:true,
        autoplayDisableOnInteraction:false,
        pagination:".swiper-pagination",
        paginationClickable:true,
        prevButton:".swiper-button-prev",
        nextButton:".swiper-button-next",
        effect:"flip"});

    function getSwiper(){
        return mySwiper;
    }

    return{getSwiper};

});