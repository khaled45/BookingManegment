var mongoose = require("mongoose")
var CouresModel = require("../Modles/CouresModel")
var TeacherModel = require("../Modles/TeacherModel")
function TeachetApis(app) {

    app.post("/signupAsTeacher", async (req, resp) => {
        try {
            const {
                name,
                username,
                password,
                phone,
                material,
                age,
                address,
                rate
            } = req.body
            let newUser = new TeacherModel({
                _id: mongoose.Types.ObjectId(),
                name,
                username,
                password,
                phone,
                material,
                age,
                address,
                rate
            })
            await newUser.save()
            resp.json({
                message: "success",
                newUser
            })
        } catch (err) {
            resp.json({
                message: "Failed",
                err
            })

        }
    })



    app.post("/signinAsTeacher", async (req, resp) => {

        const {
            username,
            password
        } = req.body

        let user = await TeacherModel.findOne({
            username,
            password
        })

        if (user) {
            req.session.user = user
            resp.json({
                message: "success",
                user
            })
        } else {
            resp.json({
                message: "Failed"
            })
        }
    })

    app.post("/addGroup", async(req, resp) => {
        try{
            const {
                teacher_id,
                CouresCode,
                forGender,
                hour,
                day,
                startDate,
                coures_price,
                capacity
            } = req.body
            let newGroup = new CouresModel({
                _id: mongoose.Types.ObjectId(),
                teacher_id,
                CouresCode,
                forGender,
                hour,
                day,
                startDate,
                coures_price,
                capacity
            })
            await newGroup.save()
            resp.json({
                message: "success",
                newGroup
            })
        }
        catch (err) {
            resp.json({
                message: "Failed",
                err
            })

        }

    })







}

module.exports = TeachetApis