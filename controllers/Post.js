let express = require('express')
let router = express.Router()
let { Post } = require('../models/Post')

router.get("", async (req, res) => {
    res.send("Hello World from the posts route")
})

router.post('/create/:content', async(req, res) => {
    let message
    try {
        let post = await Post.create({
            content: req.params.content,
        })

        message = {
            message: 'Post made!',
            data: post
        }

    } catch(err) {
        message = {
            message: 'Post failed'
        }
    }
    res.send(JSON.stringify(message))
})

module.exports = router