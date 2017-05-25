'use strict';
const express = require('express');
const wifi    = require('nonbox-wifi');
const router  = express.Router();

// scan for wireless networks
router.get('/scan', function(req, res) {
  wifi.scan().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// connect to a network
router.post('/connect', function(req, res) {
  console.log(req.body.ap)
  wifi.connect(req.body.ap).then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// status
router.get('/status', function(req, res) {
  wifi.status().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// disconnect iface
router.delete('/disconnect', function(req, res) {
  wifi.disconnect().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});
// reset iface
router.delete('/reset', function(req, res) {
  wifi.reset().then(function(resp){
    res.status(200).send(resp)
  }).catch(function(err){
    res.status(500).send(err)
  });
});

module.exports = router;
