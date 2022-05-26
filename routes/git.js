/**
 * @file:
 * @author: sunziwen(sunziwen@baidu.com)
 */
const express = require('express');
const {execSync} = require('child_process');

const router = express.Router();

router.post('/WebHook', async (req, res) => {
    console.log('WebHook');

    const data = req.body;
    if (data.password === 'WebHook') {
        try {
            await execSync('npm install');
            await execSync('git pull');
            await execSync('pm2 restart b2b-ser-jssdk-deme');
            res.json({status: 0, statusText: 'success'});
        } catch (error) {
            res.json({status: 1, statusText: error});
        }
    }
    res.json({status: 1, statusText: 'error password'});
});

module.exports = router;
