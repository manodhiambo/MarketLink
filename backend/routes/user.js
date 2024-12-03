const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
	    const { name, email, password } = req.body;
	    try {
		            const existingUser = await User.findOne({ email });
		            if (existingUser) return res.status(400).json({ error: 'User already exists' });

		            const hashedPassword = await bcrypt.hash(password, 10);
		            const newUser = new User({ name, email, password: hashedPassword });

		            await newUser.save();

		            const token = jwt.sign({ id: newUser._id }, 'secret', { expiresIn: '1h' });
		            res.status(201).json({ token, username: newUser.name });
		        } catch (error) {
				        res.status(500).json({ error: 'Server error' });
				    }
});

// Login a user
router.post('/login', async (req, res) => {
	    const { email, password } = req.body;
	    try {
		            const user = await User.findOne({ email });
		            if (!user) return res.status(404).json({ error: 'User not found' });

		            const isValid = await bcrypt.compare(password, user.password);
		            if (!isValid) return res.status(401).json({ error: 'Invalid credentials' });

		            const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
		            res.status(200).json({ token, username: user.name });
		        } catch (error) {
				        res.status(500).json({ error: 'Server error' });
				    }
});

module.exports = router;
