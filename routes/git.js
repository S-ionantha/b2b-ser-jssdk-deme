/**
 * @file:
 * @author: sunziwen(sunziwen@baidu.com)
 */
const express = require('express');
// const {run}  = require('../utils/execa');;
const {execSync} = require('child_process');
// 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
// exec('ls -l', (err, stdout, stderr) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
// })

const router = express.Router();

router.post('/WebHook', async function (req, res, next) {
    console.log();

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
