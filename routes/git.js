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
        let pull = await execSync('bash conf/pull.sh');
        console.log(pull);
        // let install = await execSync('npm install');
        // console.log(install);
        // let build = await execSync('npm run build');
        // console.log(build);
        res.json({status: 0, statusText: 'success'});
        console.log('restart');
        await execSync('pm2 restart b2b-ser-jssdk-deme');
    }
    res.json({status: 1, statusText: 'error password'});
});

module.exports = router;
