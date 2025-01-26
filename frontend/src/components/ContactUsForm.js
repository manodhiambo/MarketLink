import React, { useState } from 'react';

const ContactUsForm = () => {
	  const [message, setMessage] = useState('');

	  const handleMessageChange = (e) => {
		      setMessage(e.target.value);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
	  };
	return (
		    <form onSubmit={handleSubmit}>
		      <label>Your Message</label>
		      <textarea
		        value={message}
		        onChange={handleMessageChange}
		        placeholder="Enter your message here"
		      />
		      <button type="submit">Send Message</button>
		    </form>
		  );
};

export default ContactUsForm;
