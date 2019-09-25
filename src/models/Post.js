const mongoose = require('mongoose')


const postSchema = new mongoose.Schema(
{
    title: 
    {
        required: true,
        type: String
    },

    content: 
    {
        required: true,
        type: String,
        maxlength: 150
    },
       
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)