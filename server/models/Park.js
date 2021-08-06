const { Schema, model } = require('mongoose');

const blogSchema = require('./Blog')

const parkSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            unique: true,
        },
        
    }
)