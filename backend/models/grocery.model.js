const mongoose=require('mongoose')
const Schema = mongoose.Schema

const gSchema=new Schema({
    username: {
        name: String,
        quantity: Number
    },
},{
    timestamps:true,
})


const Groceries = mongoose.model('gSchema',gSchema)

module.exports=Groceries