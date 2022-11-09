const Post = require('./model');

async function index (req, res) {
    try{
        const posts = await Post.all;
        res.status(200).json(posts);
     } catch (err) {
        res.status(500).send(err);
     }

}

async function show(req, res) {
    try {
        const posts = await Post.findById(req.params.id);
        res.status(200).json({ ...posts});
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = { index, show }

