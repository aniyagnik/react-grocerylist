const mongoose=require('mongoose')
const Schema = mongoose.Schema

const gSchema=new Schema({
        groceryName: { type: String, required: true },
        quantity: { type: String, required: true },
    },{
        timestamps:true,
    })


const Groceries = mongoose.model('gSchema',gSchema)

module.exports=Groceries