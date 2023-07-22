require('dotenv').config();
const nodemailer = require('nodemailer');
const mailSender = async(email,subject,mailbody)=>{
    try{
        const transporter = nodemailer.createTransport(
            {
                host:'smtp.gmail.com',
                service:'Gmail',
                auth:
                {
                    user:process.env.USER,
                    pass:process.env.PASS
                }
            }
        )

        const response = await transporter.sendMail(
            {
                subject:subject,
                from:'Bhupendra Jambhale',
                to:email,
                html:mailbody
            }
        )

        return response;
    }
    catch(e)
    {
        console.log("Error occured while sending mail")
    }
}

module.exports = mailSender;