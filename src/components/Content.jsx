import React, { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://127.0.0.1:8000/api/webhooks");

    eventSource.onmessage = (event) => {
      console.log("===================> First!!!")
      console.log(event.data) ;
      const newMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log(event.data) ;
      console.log("here =================>")
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.messageText}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
