
const Joi = require('joi');
const user = require("../model/userModel")
class ProductValidation{

    static  addProduct(data){
        this.userSchema = Joi.object({
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required()
            });
      return this.userSchema.validate(data);
     
    }
}



module.exports = ProductValidation;