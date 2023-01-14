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

router.get('/login', async(req, res) =>{
    res.render('login')
})

router.post('/login', async(req,res) =>{
    const{username,password} = req.body
    
    const std =  await Student.findOne({username})
    const match = await bcrypt.compare(password,std.password)
    
    if(!std || !match)
    {
        res.redirect('/login')
    }
    if(match)
    {
        req.session.Studentid = std._id
        console.log(std._id)
        res.send(req.session.Studentid)
    }
})

router.get('/signup', async(req,res) =>{
    res.render('signup')
})

router.post('/signup', async(req,res) =>{
    const{username,email,password} = req.body

    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password,salt)

    const student = new Student({
        username : username,
        email : email,
        password: hash
    })
    await student.save()
    const advisor = await Advisor.findOne({username:"mentor3"})
    advisor.understud.push(student)
    await advisor.save()

    console.log(advisor)
    res.redirect('/login')
})



router.post('/logout' ,(req,res)=>{
    req.session.destroy()
    console.log(req.session.Studenid)
    res.redirect('/login')
})

module.exports = router