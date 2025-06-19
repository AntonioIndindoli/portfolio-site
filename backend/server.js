
require("dotenv").config();

// Import dependencies
const Post = require("./models/post");
const Image = require("./models/image"); 
const User = require("./models/user");
const { authenticate, isAdmin } = require('./middleware/authenticate');
const { uploadFile, deleteFile, getObjectSignedUrl } = require('./s3.js');
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const postsController = require("./controllers/postsController");
const commentController = require("./controllers/commentController");
const userController = require('./controllers/userController');
const threadController = require('./controllers/threadController');
const multer  = require('multer');
const sharp = require("sharp");
const crypto = require("crypto");
const storage = multer.memoryStorage()
const upload = multer();
const path = require('path');

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cors());

// Connect to database
connectToDb();

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

// Routing
app.get("/comment/:postId", commentController.fetchCommentsByPost);
app.get("/comment/:user", commentController.fetchCommentbyUser);
app.get("/comment/:id", commentController.fetchComment);
app.get("/comments/post/:postId", commentController.fetchCommentsByPost);
app.get("/comments/user/:user", commentController.fetchCommentbyUser);
app.get("/comments/:id", commentController.fetchComment);

app.post("/comment/:postId", commentController.createComment);
app.put("/comment/:id", commentController.updateComment);
app.delete("/comment/:id", commentController.deleteComment);
app.get("/users/:user", userController.fetchUser);
app.get("/users", userController.fetchUsers);

app.post("/createThread", threadController.createThreads);
app.get("/threads", threadController.fetchThreads);
app.get('/thread/:id', threadController.fetchThreadById);
//todo, add update and delete threads for renaming and deleting

app.put("/users/:user", upload.single('file'), userController.updateUser);
app.get("/post", postsController.fetchPosts);
app.get("/posts/:user", postsController.fetchPostbyUser);
app.get('/posts/thread/:thread', postsController.fetchPostbyThread);
app.get("/post/:id", postsController.fetchPost);
app.put("/post/:id", postsController.updatePost);
app.put("/likepost/:id", postsController.likePost);
app.delete("/post/:id", postsController.deletePost);
app.post('/signup', userController.signup);
app.post('/signin', userController.signin);
app.post("/post", upload.single('file'), async (req, res) => {
  let { name, body, thread } = req.body;
  const date = Date.now();
  let imageName = generateFileName();
  let post, imageData;

  if (req.file) {
    const fileBuffer = await sharp(req.file.buffer)
      .resize({ width: 1080 })
      .jpeg({ quality: 80 }) 
      .toBuffer();

    // Create an Image document and save it to MongoDB
    const newImage = await Image.create({
      name: imageName,
      data: fileBuffer,
      contentType: req.file.mimetype,
      date
    });

    // Use the saved Image document's ID as a reference in your Post document
    imageData = newImage._id;
  } else {
    imageName = "noImage";
  }

  post = await Post.create({
    name,
    body,
    thread,
    image: imageData, // Store image ID/reference instead of imageName
    likes: new Array(name),
    date,
  });

  res.json({ post });
});
app.get('/images/:imageId', async (req, res) => {
  try {
    const image = await Image.findById(req.params.imageId);
    if (!image) {
      return res.status(404).send();
    }
    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put('/admin/verify-user/:userId', authenticate, isAdmin, (req, res) => {
  const { userId } = req.params;
  User.findByIdAndUpdate(userId, { isVerified: true }, { new: true })
      .then(updatedUser => {
          if (!updatedUser) {
              return res.status(404).json({ message: 'User not found' });
          }
          res.json({ message: 'User verified successfully', user: updatedUser });
      })
      .catch(err => {
          res.status(500).json({ message: 'Error verifying user', error: err });
      });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start our server
app.listen(process.env.PORT);
