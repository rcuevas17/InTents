const { Schema, model } = require('mongoose');

const blogSchema = require('./Blog')

const parkSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            unique: true,
        },
        parkCode: {
            type: String,
            required: true,

        }
        
    }
)