require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
	  res.send('Welcome to Buy and Sell API!');
});

// Start Server
app.listen(PORT, () => {
	  console.log(`Server running on port ${PORT}`);
});

const listingsRoutes = require('./routes/listings');
app.use('/api/listings', listingsRoutes);

