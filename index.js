const PORT = process.env.PORT || 8080
const express = require('express')

const userRouter = require('./routes/user.routes')
const postController = require('./routes/post.routes')
const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postController)

app.listen(PORT, () => {
	console.log('Running on: ', PORT)
})