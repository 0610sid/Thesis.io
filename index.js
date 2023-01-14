const express = require('express');
const app = express();
app.use(express.urlencoded({extended : true}))
const mongoose = require('mongoose');
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'));



mongoose.connect('mongodb://127.0.0.1:27017/last')
.then(() => console.log('Mongoup'))
.catch(e => console.log(e));

app.use('/', require('./routes/login'))
app.use('/',require('./routes/advlogin'))
app.use('/',require('./routes/afterlogin'))

app.get('/', (req,res)=>{
    res.render('homepage')
})

app.use((req, res) => {
    console.log("Use working")
});

app.listen(5030, () => {
    console.log("5030 to rock !! ")
});