const express = require('express');
const app = express();
const Student = require('../models/student')
const Advisor = require('../models/advisor')
const bcrypt = require('bcrypt')

const session = require('express-session')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('../public'));
app.set('trust proxy',1)

const router = express.Router()

router.use(session({
    secret:'thisismysecret',
    resave: false,
    saveUninitialized: true,
    cookie:{secure:true}

}))

router.get('/advlogin', (req,res)=>{
    res.render('advlogin')
})

router.post('/advlogin',async(req,res) =>{

    const{username,password} = req.body
    
    const std =  await Advisor.findOne({username})
    const match = await bcrypt.compare(password,std.password)
    
    if(!std || !match)
    {
        res.redirect('/advlogin')
    }
    if(match)
    {
        req.session.Advid = std._id
        console.log(std._id)
        res.send(req.session.Advid)
    }
})

router.post('/advlogout', (req,res)=>{
    req.session.destroy()
    console.log(req.session.Advid)
    res.redirect('/advlogin')
})

module.exports = router