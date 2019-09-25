const express = require('express')
const routes = express.Router()
const postController = require('./controllers/postController')

//crud posts
routes.post('/post', postController.store)
routes.get('/post', postController.index)
routes.get('/post/:id', postController.show)
routes.delete('/post/:id', postController.delete)
routes.put('/post/:id', postController.update)



module.exports = routes