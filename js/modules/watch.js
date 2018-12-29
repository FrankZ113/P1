define(['update'],function(update){
   let data = {};
   let swiperItems = [];
   function watchData() {
        let adsStr = this.data.timeLimitted;
        this.swiperItems.splice(0, this.swiperItems.length);
        for (var i = 0; i < adsStr.length; i++) {
          if (adsStr[i].isEnabled == "true") {
            if (parseInt(update.updateDate()) >= parseInt(adsStr[i].startDate) && parseInt(update.updateDate()) <= parseInt(adsStr[i].endDate)) {
              if (parseInt(update.updateTime().replace(/[^0-9]/ig, "")) >= parseInt(adsStr[i].startTime.replace(/[^0-9]/ig, "")) &&
                parseInt(update.updateTime().replace(/[^0-9]/ig, "")) <= parseInt(adsStr[i].endTime.replace(/[^0-9]/ig, ""))) {
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
        return this.swiperItems;
      }
        return{watchData};
})()