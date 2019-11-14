var mongoose = require("mongoose")

var StudentModle = new mongoose.model('Students' , new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {type : String , required : true},
    userName: {type :String , required : true , unique : true },
    password : {type : String , required : true},
    phone : {type :Number , required :true},
    father_phone : {type :Number , required :true},
    education_level : {type : String , required :true},
    education_year : {type : Number , required :true},
    age : Number,
    address : String
}))

module.exports = StudentModle