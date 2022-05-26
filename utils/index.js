/**
 * @file: 工具函数
 * @author: sunziwen(sunziwen@baidu.com)
 */


const {NODE_ENV: ENV} = process.env;

const ERR_MSG = {
    SUCCESS: {status: 0},
    E_SERVER: {status: 1, errMsg: '服务器错误'},
    E_AUTH: {status: 2, errMsg: '权限错误'},
    E_DB: {status: 3, errMsg: '数据库错误'},
    E_PARAM: {status: 4, errMsg: '参数错误'},
    E_QUICK: {status: 5, errMsg: '操作过于频繁'},
    E_USER: {status: 6, errMsg: '用户已存在'}
};

const util = {
    ENV,
    ERR_MSG,

    /**
     * 成功
     * @param {Array} data
     */
    onSuccess(data) {
        return {
            status: 0,
            data
        };
    },
    /**
     * 服务异常错误
     * @param {String} errMsg
     */
    onError(errMsg = '服务异常，请稍后重试', status = 3) {
        return {
            status,
            errMsg
        };
    },
    setCookie(res, key, value, expires = 2592e5) {
        try {
            return res.cookie(key, value, {
                domain:
                    process.env.NODE_ENV == 'production'
                        ? '.ionantha.tech'
                        : 'localhost',
                path: '/',
                expires: new Date(Date.now() + expires),
                httpOnly: false
            });
        } catch (error) {
            console.error('写入cookie错误', error);
        }
    },
    clearCookie(res, key) {
        try {
            return res.clearCookie(key, {
                domain:
                    process.env.NODE_ENV == 'production'
                        ? '.ionantha.tech'
                        : 'localhost',
                path: '/',
                httpOnly: false
            });
        } catch (error) {
            console.error('删除cookie错误', error);
        }
    },
    dateFormat(stamp) {
        let date = moment(stamp).format('YYYY-MM-DD HH:ss');
        return date;
    },
    getNow(date = Date.now()) {
        return moment(date).format('YYYY-MM-DD');
    },
    sortObjArr(prop) {
        return function(obj1, obj2) {
            var val1 = obj1[prop];
            var val2 = obj2[prop];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0;
            }
        };
    }
};

export default util;
