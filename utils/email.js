const nodemailer = require('nodemailer');

const self = { user: `13526109908@139.com`, pass: `1qaz@WSXph`};

module.exports = {
    async send(address, code){
        let transporter = nodemailer.createTransport({
            host: "smtp.139.com",
            port: "465",
            secure: true,
            auth: {
                user: self.user,
                pass: self.pass,
            },
        });

        let info = await transporter.sendMail({
            from: '"Ben" <13526109908@139.com>',
            to: address || "1735416165@qq.com",
            subject: "您的邮箱验证码是：code",
            text: "您的邮箱验证码是" + code,
            html: "<b>您的邮箱验证码是" + code + "</b>",
        });
    }
}