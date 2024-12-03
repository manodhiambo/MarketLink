const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		
		// Validate request fields
		if (!email || !password) {
			return res.status(400).json({ error: 'Email and password are required' });
		}

		// Check if user exists
		const user = await User.findOne({ email });
		        if (!user) {
				return res.status(404).json({ error: 'User not found' });
			}

		// Verify password
		const isValid = await bcrypt.compare(password, user.password);
		        if (!isValid) {
				            return res.status(401).json({ error: 'Invalid credentials' });
				        }


		// Generate token
		const token = jwt.sign(
			            { id: user._id },
			            process.env.JWT_SECRET || 'secret',
			{ expiresIn: '1h' }
		);

		// Respond with token and user information
		res.status(200).json({
			            message: 'Login successful',
			            token,
			            username: user.username || user.email,
		});

	} catch (error) {
		        console.error('Login Error:', error.message);
		 res.status(500).json({ error: 'Server Error. Please try again later.' });
		    }
});

module.exports = router;
