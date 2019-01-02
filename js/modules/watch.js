define(['update'],function(update){
    console.log("Start watch");
   var data = {};
   var swiperItems = [];
  function watchData() {
    let adsStr = this.data.timeLimitted;
    this.swiperItems.splice(0, this.swiperItems.length);
    for (var i = 0; i < adsStr.length; i++) {
      if (adsStr[i].isEnabled == "true") {
        if (parseInt(update.date) >= parseInt(adsStr[i].startDate) && parseInt(update.date) <= parseInt(adsStr[i].endDate)) {
          if (parseInt(update.time.replace(/[^0-9]/ig, "")) >= parseInt(adsStr[i].startTime.replace(/[^0-9]/ig, "")) &&
            parseInt(update.time.replace(/[^0-9]/ig, "")) <= parseInt(adsStr[i].endTime.replace(/[^0-9]/ig, ""))) {
            this.swiperItems.push(adsStr[i]);
          }
        }
      }
    }
    if (this.swiperItems.length == 0) {
      for (var k = 0; k < this.data.default.length; k++) {
        if (this.data.default[k].isEnabled == "true") {
          this.swiperItems.push(this.data.default[k]);
        }
      }
    }
  }
        return{watchData};
})()