define(function(){
    
   function updateDateTime() {
      let objD = new Date();
      let yy = objD.getYear();
      if (yy < 1900) yy = yy + 1900;
      let MM = objD.getMonth() + 1;
      if (MM < 10) MM = '0' + MM;
      let dd = objD.getDate();
      if (dd < 10) dd = '0' + dd;
      let hh = objD.getHours();
      if (hh < 10) hh = '0' + hh;
      let mm = objD.getMinutes();
      if (mm < 10) mm = '0' + mm;
      let ss = objD.getSeconds();
      if (ss < 10) ss = '0' + ss;
      this.date = yy + '' + MM + '' + dd;
      this.time = hh + ":" + mm + ":" + ss;
    }
    return{updateDateTime};

})()