module.exports = function RunAPIS(app) {
    require('./StudentAPIs')(app)
    require('./TeacherApis')(app)

    
}