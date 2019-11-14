///////Variables
var mongoose = require("mongoose")
var express = require("express")
var app = express()
var session = require("express-session")
var cors = require("cors")
// var uuid = require("uuid/v4")
var cookieParser = require("cookie-parser")

var RunApis = require("./Apis/RunApis")
    ////////////Middell Area

    app.use(express.json())
    app.use(cookieParser())
    app.use(session({
        secret: "secret",
        resave: false
    }))
    app.use(cors({
        origin: "http://localhost:4200",
        credentials: true
    }))


     app.use(Authenticate)

      ///////DB Connection

      
      mongoose.connect("mongodb://localhost:27017/BookingManeger2")


         //////////Server

    
function Authenticate(req, resp, next) {
    if (req.url === '/signupAsStudent' || req.url === '/signupAsTeacher' || req.url === '/signinAsStudent' || req.url === '/signinAsTeacher') {
 debugger
        next()
    } else {
        if (req.session.user && req.cookies["connect.sid"]) {
            next()
        } else {
            resp.json({
                mesg: "Authentication Failed ! :( "
            })
        }

          }

    }
    RunApis(app)

   



    app.listen(8085)