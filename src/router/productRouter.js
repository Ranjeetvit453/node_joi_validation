const {Router} = require("express");
const UserController = require("../controller/productController");
const UserValidation = require("../validation/productValidation");

class ProductRouter{
    constructor(){
        this.router = Router();
        this.getRouter()
        this.postRouter();
    }


    getRouter(){

    }

    postRouter(){
        this.router.post("/create",
        UserController.addProduct)
    }

    
}

module.exports = new ProductRouter().router