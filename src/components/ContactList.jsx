import React from 'react';
import { Card } from 'react-bootstrap';

const Message = ({ text, sender, time, isSent }) => {
  return (
    <Card
      bg={isSent ? 'primary' : 'light'}
      text={isSent ? 'white' : 'dark'}
      className={`mb-2 ${isSent ? 'ml-auto' : 'mr-auto'}`}
      style={{ maxWidth: '75%' }}
    >
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Text className="text-muted small">
          {sender} • {time}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Message;
