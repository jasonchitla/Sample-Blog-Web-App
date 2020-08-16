var express = require('express');
var router = express.Router();

// temporary memory source for blogs (can be replaced with a database)
var blogs = [{id: 1, title: 'A Blog Post', content: 'blah blah', date: Date.now()}, {id: 2, title: 'Life Leadership Post', content: 'blah blah blah', date: Date.now()}];

/* GET all posts */
router.get('/read', function(req, res, next) {
  res.json(blogs);
});

/* POST create a new post */
router.post('/create', function(req, res, next) {
  const newPost = {
    id: blogs.length + 1,
    title: req.body.title,
    content: req.body.content,
    date: Date.now()
  };

  blogs.unshift(newPost);
  res.status(200).json(newPost);
});

module.exports = router;