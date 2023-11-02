import React from 'react';

const MessageDisplay = ({ sentMessages }) => {
  return (
    <div>
      <h2>Sent Messages:</h2>
      <ul>
        {sentMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageDisplay;
