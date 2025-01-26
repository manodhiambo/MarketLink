const MarketSubmission = require('../models/MarketSubmission');

exports.submitMarketData = async (req, res) => {
	  const { title, description, price } = req.body;

	  try {
		      const newSubmission = new MarketSubmission({
			            title,
			            description,
			            price,
			          });

		      await newSubmission.save();

		      res.status(201).json({ msg: 'Market data submitted successfully', newSubmission });
		    } catch (err) {
			        console.error(err.message);
			        res.status(500).send('Server error');
			      }
};
