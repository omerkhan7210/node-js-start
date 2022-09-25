const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/appRoutes");
const app = express();
//BLOG SCHEMA AND MODEL
const model = require("./models/blog");

//MONGO DB CONNECTION
const dataURI = "mongodb+srv://omerkhan7210:omerkhan12345@cluster0.udfhf3i.mongodb.net/node?retryWrites=true&w=majority";
mongoose.connect(dataURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("connected!"))
.catch((err)=> console.log(err));

//SETTING VIEW ENGINE
app.set("view engine","ejs");
//LISTENING TO PORT AND LOCAL HOST(DEFAULT)
app.listen(3000);


//MIDDLEWARE USING MORGAN(THIRD PARTY MIDDLEWARE)
app.use(morgan("dev"));

//USING STATIC FILES BY USING PUBLIC FOLDER USING EXPRESS MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.redirect("/index");
});

app.get("/index",(req,res)=>{
    model.find()
    .then((result)=> {
        res.render("index",{title: "Home", blogs: result});
    })
    .catch((err)=> console.log(err));
    
});

app.get("/about",(req,res)=>{
    res.render("about",{title:"About"});
});
app.get("/about-us",(req,res)=>{
    res.redirect("/about");
});

//APP ROUTES
app.use("/app",routes);

app.use((req,res)=>{
    res.status(404).render("404",{title:"404"});
});