const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports ={
    sendMail : async (from, to, subject, body, html) => {

        let msg = {
            from: from,
            to: to,
            subject: subject,
            text: body,
            html : html
        };

        await sgMail.send(msg, (err, result) => {
            if(err){
                    return false;
            }
            else{
                return true;
            }
        });

    }
}