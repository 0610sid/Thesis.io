const reqadvisor = (req, res) => {
    if(!req.session.Advid){
        res.redirect('/advlogin')
    }
}

module.exports = reqadvisor