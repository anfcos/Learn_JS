const {Router} = require("express");
module.exports = (name) =>{

    const router = new Router();
    router.get(`/${name}/`, (req, res) =>{
        //console.log(req.headers);
        res.send({method:"get", name});
    });
    router.post(`/${name}/`, (req, res) =>{
       // console.log(req.query);
        res.send({method:"post", name});
    });
    return router;
}
