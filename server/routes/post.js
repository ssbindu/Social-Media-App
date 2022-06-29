// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router

  .post('/createcontent', async (req, res) => {
    try {
      const post = await Post.createcontent(req.body.postname, req.body.postcontent,req.body.userid);
      res.send({...post, userid: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/updatetitle', async (req, res) => {
    try {
      const post = await Post.updatetitle(req.body.id, req.body.postname);
      res.send({...post, userid: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .put('/updatecontent', async (req, res) => {
    try {
      const post = await Post.updatecontent(req.body.id, req.body.postcontent);
      res.send({...post, userid: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/deletepost', async (req, res) => {
    try {
      await Post.deletePost(req.body.id);
      res.send({ success: "The post is deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;