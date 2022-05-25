/**
 * @file:
 * @author: sunziwen(sunziwen@baidu.com)
 */
var express = require('express');
var router = express.Router();

router.post('/WebHook', function (req, res, next) {
    console.log(req.body);
    res.json({status: 200, statusText: 'success'});
});

module.exports = router;
