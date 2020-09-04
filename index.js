const app = require('./koa');
const conf = require('./config.js');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const db = require('./db');
/**
 * 当我们配置ejs模板引擎的时候
 * 配置的代码一定要放在配置router代码之前
 */

app.use(bodyParser());


app.use(views('views',{
    map: {
        html: 'ejs'
    }
}))

const router = require('./router');

app.use(ctx => {
    ctx.body = 'hello Syncword';
})

app.listen(conf.server.PORT, () => {
    console.log(`Server run at http://localhost:${conf.server.PORT}`);
})