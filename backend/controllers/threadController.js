const Thread = require("../models/thread");

const fetchThreads = async (req, res) => {
  const threads = await Thread.find();

  res.json({ threads });
};

const createThreads = async (req, res) => {
  try {
    let { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    let thread = await Thread.create({ name });
    res.status(201).json({ thread });
  } catch (error) {
    console.error("Error creating thread: ", error);
    res.status(500).json({ message: "Error creating thread" });
  }
};
const fetchThreadById = async (req, res) => {
  try {
    const threadId = req.params.id; // Get the ID from the route parameter
    const thread = await Thread.findById(threadId);

    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }

    res.json(thread); // Or res.json({ thread }) to keep a consistent object structure
  } catch (error) {
    console.error("Error fetching thread: ", error);
    res.status(500).json({ message: "Error fetching thread" });
  }
};


module.exports = {
  fetchThreads,
  createThreads,
  fetchThreadById
};