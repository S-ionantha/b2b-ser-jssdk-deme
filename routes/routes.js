/**
 * @file: 自动配置路由
 * @author: sunziwen(sunziwen@baidu.com)
 */

const fs = require('fs');

let list = [];
let PATH = './routes';
const reg = new RegExp('.js$', '');

let routerObj = (file, basePath, routerPath) => {
    return {
        path: file === 'index' ? basePath : routerPath,
        router: require('.' + routerPath)
    };
};

const setRouter = (filePath, basePath, routerPath) => {
    let files = fs.readdirSync(filePath);
    files.forEach(file => {
        if (reg.test(file) && file !== 'routes.js') {
            file = file.replace(/\.js$/, '');
            list.push(routerObj(file, basePath, routerPath + file));
        } else if (!reg.test(file)) {
            setRouter(filePath + file, basePath + file, routerPath + file);
        }
    });
};
setRouter(PATH, '/', '/');

module.exports = list;
