const express = require("express");
const router = express.Router();
const list = require("../models/app");

router.get("/",(req,res)=>{
    // //GETTING AND SAVING DATA TO MODEL AND THEN TO DB
    // const blog = new model({
    //     title:"Hello World",
    //     paragraph:"first blog on db",
    //     body:"werenferjgnetjrgnrekjgnerk"
    // });
    // blog.save()
    //.then((result)=> {
    //res.send(result);
    // });
    list.find()
    .then((result)=>{
        res.render("app",{title:"App", lists:result});
    })
    
});

//POST REQUESTS
router.post("/",(req,res)=>{
    const listItem = new list(req.body);
    listItem.save()
    .then((result)=>{
        res.redirect("/app");
    })
    .catch((err)=> console.log(err));
})

//FINDING LIST ITEMS IN DB THEIR BY IDS
router.get("/:id",(req,res)=>{
    const id = req.params.id;
    
    list.findById(id)
    .then((result)=>{
        res.render("details",{lists:result,title:"List Item Details"})
    })
    .catch((err)=> console.log(err));
});

//DELETING DATABASE DATA
router.delete("/:id",(req,res)=>{
    const id = req.params.id;
    list.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect : "/app"})
    })
    .catch((err)=> console.log(err));
})

module.exports = router;
