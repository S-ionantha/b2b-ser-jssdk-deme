/**
 * @file: 
 * @author: sunziwen(sunziwen@baidu.com)
 */
 var express = require('express');
 var router = express.Router();
 
 router.post('/WebHook', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });
 
 module.exports = router;
 