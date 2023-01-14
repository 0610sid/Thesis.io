const mongoose = require('mongoose');
const sdata = require('./studentd')
const adata = require('./advd')
const bcrypt = require('bcrypt')

const Student = require('../models/student')
const Advisor = require('../models/advisor');

mongoose.connect('mongodb://127.0.0.1:27017/last', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});

const dbconnect = function () {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "Aai jhavli coltya"))
    db.once('open', () => {
        console.log("Coltya tu best hai")
    })
}

dbconnect();

const seedDb = async () =>{

    for(i=0;i < adata.length;i++)
    {
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(adata[i].password,salt)
        
        const advisor = new Advisor({
            username : adata[i].username,
            password : hash,
        })
        advisor.save();
    }

    for(i=0;i < 3;i++)
    {   
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(sdata[i].password,salt)

        const student = new Student({
            username : sdata[i].username,
            password : hash,
            email : sdata[i].email
        })

        await student.save()
        const advisor = await Advisor.findOne({username:"mentor1"})
        console.log(advisor)
        advisor.understud.push(student)
        await advisor.save()
    }

    for(i=3;i < 6;i++)
    {   
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(sdata[i].password,salt)

        const student = new Student({
            username : sdata[i].username,
            password : hash,
            email : sdata[i].email
        })

        await student.save()
        const advisor = await Advisor.findOne({username:"mentor2"})
        console.log(advisor)
        advisor.understud.push(student)
        await advisor.save()
    }
}

seedDb().then(() => {
    mongoose.connection.close();
})
