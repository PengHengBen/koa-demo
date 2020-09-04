const KoaRouter = require('koa-router');
const router = new KoaRouter();
const uEmail = require('../../utils/email.js');
const numRandom = require('number-random');
const MailCode = require('../../db/mail-code.js');

router.post('/login', async ctx => {
    ctx.body = `login api`;
})

router.get('/email/code', async ctx => {
    let email = ctx.query.email;
    if(email){
        let code = numRandom(100000,999999);
        uEmail.send(email, code);
        ctx.body = `已发送`;

        let doc = new MailCode({
            code,
            mail: email
        })
        doc.save().then(res => {
            console.log('保存验证码成功');
        }).catch(err => {
            console.log(err);
        });
    }else{
        ctx.body = `email 不存在`;
    }
})

//异步的方法 需要await
router.get('/register', async ctx => {
    await ctx.render('register', {
        name: '注册页面'
    })
})

router.post('/register', async ctx => {
    ctx.body = ctx.request.body;
})

router.get('/logout', async ctx => {
    ctx.body = `logout`;
})

module.exports = router;