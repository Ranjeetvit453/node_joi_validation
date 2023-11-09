const {ValidationError } = require('joi');
const UserValidation = require("../validation/productValidation")
class ProductController{

    static async addProduct(req,res,next){
      const { error } = UserValidation.addProduct(req.body);
      console.log(" errorVali ",error)
      if (error) {
        return res.status(400).json({status:400,message:error.details[0].message});
      }
      //const errorVali = ValidationError(req);
      
      console.log(" hello product controller",req.body)  
    }
}

module.exports = ProductController