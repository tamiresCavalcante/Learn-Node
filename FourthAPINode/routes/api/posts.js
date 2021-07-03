const express = require('express');
const router = express.Router();

//posts Model
const Posts = require('../../models/Posts');

// @routes GET api/posts
// @description Get all post
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if(!posts) throw Error('No items');
        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({ msg: err })
    }
})



// @routes POST api/posts
// @description Create an post
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if(!post) throw Error('Something went wrong while saving the post')

        res.status(200).json(post);
    } catch {
        res.status(400).json({ msg:err })
    }
});

// @routes DELETE api/posts
// @description Delete an post
router.delete('/:d', async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id)
        if(!post) throw Error('No post found!');

        res.status(200).json({ sucess: true })
    } catch(err) {
        res.status(400).json({ msg: err })
    }
})

// @routes UPDATE api/posts
// @description Update an post
router.patch('/:id', (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(re.params.id)
    } catch(err) {
        res.status(400).json({ msg: err });
    }
})

module.exports = router;