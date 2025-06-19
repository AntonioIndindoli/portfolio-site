// middleware/authenticate.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Assuming Bearer token is used
  
  if (!token) {
    return res.status(403).json({ message: 'Authentication token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Failed to authenticate token' });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking user admin status', error: error.message });
  }
};

module.exports = { authenticate, isAdmin };
