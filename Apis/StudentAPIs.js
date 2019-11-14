var mongoose = require("mongoose")
var StudentModel = require("../Modles/StudentModel")
var CouresModel = require("../Modles/CouresModel")

function StudentAPIs(app) {

    app.post("/signupAsStudent", async (req, resp) => {
        try {
            const {
                name,
                username,
                password,
                phone,
                father_phone,
                education_level,
                education_year,
                age,
                address
            } = req.body
            let newUser = new StudentModel({
                _id: mongoose.Types.ObjectId(),
                name,
                username,
                password,
                phone,
                father_phone,
                education_level,
                education_year,
                age,
                address
            })
            await newUser.save()
            resp.json({
                message: "success",
                newUser
            })
        } catch (err) {
            resp.json({
                message: "Failed"
            })

        }
    })



    app.post("/signinAsStudent", async (req, resp) => {
        
            const {
                username,
                password
            } = req.body

            let user = await userModle.findOne({
                username,
                password
            })

            if (user){
                req.session.user = user
                resp.json({
                    message: "success",
                    user
                })
            }
            else{
                resp.json({
                    message: "Failed"
                })
            }
    })


    app.get("/signout", (req, resp) => {
        req.session.destroy()
        resp.json({message : "success"})
    })


    app.post("/booking" , async(req , resp)=>{
        const{S_id , C_id} = req.body
        let couserBooked = await CouresModel.findById({_id :C_id})
        if(couserBooked){
           if( couserBooked.capacity){
            couserBooked.capacity = couserBooked.capacity - 1
            couserBooked.students.push(S_id)
           let out = await couserBooked.save()
           resp.json({message : "Booked Successfully" , data :out})
           }
           else{
               resp.json({message : "This Group Id Compelet"})

           }

        }
        else{
            resp.json({message :"Coures Not Founed"})
        }

    })




}

module.exports = StudentAPIs