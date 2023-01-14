const express = require('express');
const app = express();
const path = require('path')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const router = express.Router()

router.get('/dashboard', (req,res) =>{
    res.render('sdashboard')
})

module.exports = router