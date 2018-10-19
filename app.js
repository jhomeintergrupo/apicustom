'use strict'

const express = require ('express')
const bodyparser = require ('body-parser')
const app = express()
const  contentCtrl = require ('./controllers/product')
const auth = require('./middlewares/auth')
const userCtrl = require('./controllers/user')


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get ('/api/content', contentCtrl.getProducts)
app.get ('/api/content/:idcusto', contentCtrl.getProduct)
app.post ('/api/content/', contentCtrl.saveProduct)
app.put ('/api/content/:idcustom', contentCtrl.updateProduct)
app.delete ('/api/content/:idcustom', contentCtrl.deleteProduct)

app.post('/api/signup', userCtrl.signUp)
app.post('/api/signin', userCtrl.signIn)

app.get('/api/private', auth, (req, res) => {
res.status(200).send({message:'Tienes acceso'})
})

module.exports = app