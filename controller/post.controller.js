const db = require('../db')

class PostController {
	async createPost(req, res) {
		const {title, content, userId} = req.body;

		if(!userId){
			return res.json({
				err: 'Specify user_id'
			})
		}

		const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId])

		res.json(newPost.rows[0])
	}

	async getPosts(req, res) {
		const posts = await db.query(`SELECT * FROM post`)

		res.json(posts.rows)
	}
}

module.exports = new PostController()