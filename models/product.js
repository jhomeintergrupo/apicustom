'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    idcustom: Number,    
    contenido: String,
    category: { type: String, enum: ['URL', 'texto', 'imagen', 'video', 'audio', 'youtube'] },
    description: String
})

module.exports = mongoose.model('Product', ProductSchema)
