const express = require('express');
const axios = require('axios');
const redis = require('../utils/redis');
const mockData = require('../conf/mock');

const router = express.Router();

router.get('/list', async (req, res) => {
    const query = req.query;
    console.log(query);
    if (query.env === 'mock') {
        res.json(mockData.list);
    }
    let access_token = await redis.getItem('access_token');
    console.log(access_token);
    if (!access_token) {
        let {data: accessData} = await axios.get(
            'https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=ZDH1cmWNzfnzerAPKCTmAGxWYGsEwis7&client_secret=pGYaQnGcKkB078zSAGhboqhRu9Q9KqDl'
        );
        await redis.setItem(
            'access_token',
            accessData.access_token,
            accessData.expires_in
        );

        access_token = accessData.access_token;
    }
    console.log(query.env);
    // rest/2.0/b2b_tp/offline/goods/list
    // rest/2.0/b2b_tp/goods/list
    let url = `https://openapi.baidu.com/rest/2.0/b2b_tp/${
        query.env ? 'offline/' : ''
    }goods/list?app_id=172&access_token=${access_token}&ticket=${
        query.ticket
    }`
    console.log(url)
    let {data: list} = await axios.get(
        `https://openapi.baidu.com/rest/2.0/b2b_tp/${
            query.env ? 'offline/' : ''
        }goods/list?app_id=172&access_token=${access_token}&ticket=${
            query.ticket
        }`
    );

    res.json({
        status: 0,
        data: list
    });
});

module.exports = router;
