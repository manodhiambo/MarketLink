import React, { useState, useEffect } from 'react';

const FlashSale = () => {
	  const [timeLeft, setTimeLeft] = useState(3600); // Example: 1 hour

	  useEffect(() => {
		      const interval = setInterval(() => {
			            setTimeLeft(prev => prev - 1);
			          }, 1000);

		      return () => clearInterval(interval);
		    }, []);

	  return (
		      <div className="flash-sale">
		        <h3>Flash Sale - Time Left: {timeLeft}s</h3>
		      </div>
		    );
};

export default FlashSale;
