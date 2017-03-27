const WiFiControl = require('wifi-control');
const wifi = {};

// configure wifi-control
WiFiControl.configure({
  debug: true,
  iface: 'wlan1',
  connectionTimeout: 10000 // in ms
})
WiFiControl.init({
  debug: true
});

//=====================

wifi.scan = function() {
  return new Promise(function(resolve, reject){
    WiFiControl.scanForWiFi( function(err, resp) {
      err ? reject(err) : resolve(resp);
    });
  });
}
wifi.connect = function(ap) {
  return new Promise(function(resolve, reject){
    WiFiControl.connectToAP(ap, function(err, resp) {
      err ? reject(err) : resolve(resp);
    });
  })
}
wifi.status = function() {
  return new Promise(function(resolve, reject){
    var state = WiFiControl.getIfaceState();
    resolve(state);
  })
}
wifi.reset = function(){
  return new Promise(function(resolve, reject){
    WiFiControl.resetWiFi(function(err, resp) {
      err ? reject(err) : resolve(resp);
    });
  })
}

module.exports = wifi;
