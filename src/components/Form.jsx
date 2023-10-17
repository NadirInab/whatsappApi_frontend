// src/components/MessageForm.js
import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      messaging_product: 'whatsapp',
      to: recipient,
      type: 'text',
      text: {
        body: message
      }
    };
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/sendMessage',data
      );

      console.log('Message sent:', response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
   
      <div>
        <label>Recipient :</label>
        <input
          type="tel"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div>
        <label>Message :</label>
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
