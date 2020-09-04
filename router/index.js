const user = require('./routes/user.js');
const Router = require('koa-router');
const app = require('../koa.js');
const readDir = require('require-directory');

const visitor = (obj) => {
    if(obj instanceof Router){
        app.use(obj.routes());
    }
}

readDir(module, './routes', {visit: visitor});