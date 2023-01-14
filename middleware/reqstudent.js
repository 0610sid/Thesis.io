const reqstudent = (req, res) => {
    if(!req.session.Studentid){
        res.redirect('/login')
    }
}

module.exports = reqstudent