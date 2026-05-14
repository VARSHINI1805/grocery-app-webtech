const mongoose = require('mongoose')
const Item = require('./database/models/Item')

mongoose.connect('mongodb://localhost/FreshNGreen')

Item.find({},(error,items)=>{
    console.log(error,items)
})
