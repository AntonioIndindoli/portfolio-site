const Post = require("../models/post");

const { uploadFile, deleteFile, getObjectSignedUrl } = require('../s3.js');
const multer = require("multer");
const sharp = require("sharp");
const crypto = require("crypto");
const upload = multer({ dest: 'uploads/' })

const fetchPosts = async (req, res) => {
  // Find the posts
  const posts = await Post.find().sort({ date: -1 });
/*
  for (let post of posts) {
    if (post.imageName != 'noImage')
      post.imageName = await getObjectSignedUrl(post.imageName)
    
  }
*/
  // Respond with them
  res.json({ posts });
};

const fetchPostbyUser = async (req, res) => {
  // Find the posts
  var userurl = req.params.user;
  const posts = await Post.find({ "name": userurl }).sort({ date: -1 });
/*
  for (let post of posts) {
    if (post.imageName != 'noImage')
      post.imageName = await getObjectSignedUrl(post.imageName)
  }
  */
  // Respond with them
  res.json({ posts });
};

const fetchPostbyThread = async (req, res) => {
  // Assuming 'thread' is the thread identifier (name or ID) passed in the URL
  const threadIdentifier = req.params.thread;

  // Update your query to filter posts by the 'thread' field
  const posts = await Post.find({ thread: threadIdentifier }).sort({ date: -1 });

  res.json({ posts });
};



const fetchPost = async (req, res) => {
  // Get id off the url
  const PostId = req.params.id;

  // Find the Post using that id
  const posts = await Post.findOne({ _id: PostId });
  console.log(posts)
/*
  if (posts.imageName != 'noImage')
  posts.imageName = await getObjectSignedUrl(posts.imageName)
  */
  // Respond with the Post
  res.json({ posts });
};

const likePost = async (req, res) => {
  const PostId = req.params.id;
  const { name } = req.body;

  const posts = await Post.findByIdAndUpdate(PostId,
    { $addToSet: { likes: name } }, { new: true })

  res.json({ posts });
}

const updatePost = async (req, res) => {
  // Get the id off the url
  const PostId = req.params.id;

  // Get the data off the req body
  const { name, body, date } = req.body;

  // Find and update the record
  await Post.findByIdAndUpdate(PostId, {
    name,
    body,
    date
  });

  // Find updated Post
  const posts = await Post.findById(PostId);

  // Respond with it
  res.json({ posts });
};

const deletePost = async (req, res) => {
  // get id off url
  const PostId = req.params.id;

  // Delete the record
  await Post.deleteOne({ id: PostId });
  await deleteFile(req.imageName);

  // Respond
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchPosts,
  fetchPost,
  likePost,
  fetchPostbyUser,
  fetchPostbyThread,
  updatePost,
  deletePost,
};