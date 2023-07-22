const mongoose= require('mongoose');
const mailSender = require('../utils/mailSender');
const Form = new mongoose.Schema(
    {
       name:
       {
        type:String
       },
       email:
       {
        type:String
       },
       message:
       {
        type:String
       }
    }
)

Form.post('save',async function(doc)
{
    const mailSent = await mailSender(this.email,"Thanks from Bhupendra",`Thanks ${this.name} for visiting my portfolio!`)
    
    console.log(mailSent);
})
module.exports = mongoose.model('Form',Form);