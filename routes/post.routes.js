const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/posts', postController.getPosts)

module.exports = router