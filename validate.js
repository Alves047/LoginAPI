//Imports Variables
const Joi = require("joi");

//Register Validate Function
const registerValid = (data)=>{
    const schema = Joi.object({
            name: Joi.string().required().min(4).max(20),
            email: Joi.string().required().min(4).max(20),
            password: Joi.string().required().min(8).max(16)
    })
    return schema.validate(data)
}
//Login Validate Function
const loginValid = (data)=>{
    const schema = Joi.object({
            email: Joi.string().required().min(4).max(20),
            password: Joi.string().required().min(4).max(20)
    })
    return schema.validate(data)
}

// Exports Functions
module.exports.loginValid = loginValid
module.exports.registerValid =  registerValid