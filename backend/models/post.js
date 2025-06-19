const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   body: {
    type: String
  }, 
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread', // Assuming there's a Thread model
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    required: false
  },
  likes: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;