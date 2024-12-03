const express = require('express');
const Listing = require('../models/Listing');

const router = express.Router();

// Add a new listing
router.post('/', async (req, res) => {
	    const { title, description, price, imageUrl, seller } = req.body;
	    try {
		            const newListing = new Listing({ title, description, price, imageUrl, seller });
		            await newListing.save();
		            res.status(201).json(newListing);
		        } catch (error) {
				        res.status(500).json({ error: 'Server error' });
				    }
});

// Get all listings
router.get('/', async (req, res) => {
	    try {
		            const listings = await Listing.find().populate('seller', 'name');
		            res.status(200).json(listings);
		        } catch (error) {
				        res.status(500).json({ error: 'Server error' });
				    }
});

module.exports = router;
