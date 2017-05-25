'use strict';
const express = require('express');
// const control = require('nonbox-control');
const router  = express.Router();

router.get('/', function(req, res) {
  res.send('nonbox server')
});

// get nonbox battery, version, etc
router.get('/info', function(req, res) {
  control.info().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// update nonbox OS version
router.get('/update', function(req, res) {3000
  control.update().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// change nonbox wifi password
router.post('/password', function(req, res) {
  control.password(req.body.password).then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// DHCP: get connected devices
router.get('/devices', function(req, res) {
  control.DHCPdevices().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// DHCP: kick device of network
router.delete('/device', function(req, res) {
  control.DHCPremove(req.body.mac).then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});

module.exports = router;
