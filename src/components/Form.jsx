import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const [whatsappData, setWhatsappData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/webhooks') 
        .then(response => {
          console.log(response.data) ;
          console.log("helo fze ===============================================") ;
            setWhatsappData(response.data);
        })
        .catch(error => {
            console.error('Error fetching WhatsApp data:', error);
        });
  }, []);

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

    console.log(data) ;

    try {
      const response = await axios.post(
        'http://127.0.0.1:8080/api/sendMessage', data
      );
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipient:</label>
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

      <div>
        {whatsappData && (
          <div>
            <pre>{JSON.stringify(whatsappData, null, 2)}</pre>
          </div>
        )}
      </div>
    </form>
  );
};

export default MessageForm;
