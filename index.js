const {Router} = require("express");
const express = require("express");
const controllers = require("./controller");
const models = require("./bd/models");

const user = models.user;
const app = express();


app.use(express.json());

Object.keys(controllers).forEach((controller) =>{
    const item = controllers[controller];
    console.log("new item", controller);
    if(typeof item ==="function")
    {
        const router = item(controller);
        //console.log(router);
        app.use(router);
    }
})
user.findAll({
    
}).then((data) => {
    console.log(data.map((item) => item.toJSON()));
})
user.create({caption: "Z", description:"Test"})

//console.log(models);
app.listen(6001, ()=>{
    console.log("I'm here")
})