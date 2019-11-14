var mongoose = require("mongoose")

var CouresModle = new mongoose.model('Coures', new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    CouresCode: {
        type: String,
        unique: true,
        required: true
    },
    forGender: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    coures_price: {
        type: Number,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students"
    }],
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teachers"
    }
}))

module.exports = CouresModle