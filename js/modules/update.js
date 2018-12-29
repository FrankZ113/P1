define(function(){
    let date = undefined;
    let time = undefined;
    let objD = new Date();
   function updateDate() {
      //let objD = new Date();
      let yy = objD.getYear();
      if (yy < 1900) yy = yy + 1900;
      let MM = objD.getMonth() + 1;
      if (MM < 10) MM = '0' + MM;
      let dd = objD.getDate();
      if (dd < 10) dd = '0' + dd;
      this.date = yy + '' + MM + '' + dd;
      return this.date;
    }
    function updateTime(){
      let hh = objD.getHours();
      if (hh < 10) hh = '0' + hh;
      let mm = objD.getMinutes();
      if (mm < 10) mm = '0' + mm;
      let ss = objD.getSeconds();
      if (ss < 10) ss = '0' + ss;
      this.time = hh + ":" + mm + ":" + ss;
      return this.time;
    }
    return{updateDate,updateTime};

})()