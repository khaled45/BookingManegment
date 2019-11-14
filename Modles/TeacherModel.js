var mongoose = require("mongoose")

var TeacherModle = new mongoose.model('Teachers' , new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type : String , required : true},
    username: {type :String , required : true  },
    password : {type : String , required : true},
    phone : {type :Number , required :true},
    material : {type : String , required :true},
    age : Number,
    address : String,
    rate : [Number]
}))

module.exports = TeacherModle