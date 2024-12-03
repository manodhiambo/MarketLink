const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
	  title: { type: String, required: true },
	  description: { type: String, required: true },
	  price: { type: Number, required: true },
	  imageUrl: { type: String, required: true },
	seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Listing', ListingSchema);
