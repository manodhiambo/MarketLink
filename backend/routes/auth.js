const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
	  try {
		      const { email, password } = req.body;


		   // Check if user exists
		  const user = await User.findOne({ email });
		      if (!user) return res.status(404).json({ error: 'User not found' });

		  // Verify password
		  const isValid = await bcrypt.compare(password, user.password);
		      if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

		  // Generate token
		  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

		      res.status(200).json({ token, username: user.username });
		    } catch (error) {
			        res.status(500).json({ error: 'Server Error' });
			      }
});

module.exports = router;
