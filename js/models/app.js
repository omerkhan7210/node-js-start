const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appSchema = new Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

const lists = mongoose.model("App",appSchema);
module.exports = lists;
