// src/components/MessageForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
        'recipient' : recipient, 
        'message' : message
    } ;

    try {
      const response = await axios.post(
        '127.0.0.1:8000/api/sendMessage',data
      );

      console.log('Message sent:', response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
   
      <div>
        <label>Recipient's WhatsApp Number:</label>
        <input
          type="tel"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;
