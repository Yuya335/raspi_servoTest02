var PiServo = require('pi-servo');

// pass the GPIO number
var sv1 = new PiServo(4); 
 
sv1.open().then(function(){  
  sv1.setDegree(0); // 0 - 180
});
setTimeout(() => {
sv1.open().then(function(){  
  sv1.setDegree(180); // 0 - 180
});
},500);

