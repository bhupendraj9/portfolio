const Form = require('../model/Form');

const FormInput = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }
const Form = require('../model/Form');

const FormInput = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
      });
    }

    const FormData = await Form.create({
      name: name,
      email: email,
      message: message,
    });

    console.log('Form data captured', FormData);

    return res.status(200).json({
      success: true,
      message: 'Form data saved successfully',
      FormData: FormData,
    });
  } catch (e) {
    console.log('An error occurred on FormInput Controller:', e.message);

    res.status(500).json({
      success: false,
      message: 'Error occurred on FormInput Controller',
      error: e.message,
    });
  }
};

module.exports = FormInput;

    const FormData = await Form.create({
      name: name,
      email: email,
      message: message,
    });

    console.log('Form data captured', FormData);

    return res.status(200).json({
      success: true,
      message: 'Form data saved successfully',
      FormData: FormData,
    });
  } catch (e) {
    console.log('An error occurred on FormInput Controller:', e.message);

    res.status(500).json({
      success: false,
      message: 'Error occurred on FormInput Controller',
      error: e.message,
    });
  }
};

module.exports = FormInput;
