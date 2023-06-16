const {Router} = require("express");
module.exports = (name) =>{

    const router = new Router();
    const clients = [{"Vasya":500}, {"Fedya":1000}, {"Sigizmynd":100}];
    const clients2 = ["Liza", "Fred", "Sigizmynd", "Izya"]
    router.get(`/${name}/`, (req, res) =>{
        //console.log(req.headers);
        res.send({method:"get",name, clients});
    });
    router.post(`/${name}/`, (req, res) =>{
       ///clients.filter(item => item.includes(1000));
        //console.log(req.query);
        res.send({method:"post", name, clients});
    });
    return router;
}
