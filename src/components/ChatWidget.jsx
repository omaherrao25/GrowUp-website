import React, { useState } from 'react';

export default function ChatWidget() {
  const [chatContent, setChatContent] = useState({
    icon: '✦',
    label: 'Chat With Flowie'
  });

  const handleClick = () => {
    setChatContent({ icon: '💬', label: 'Coming soon!' });
    setTimeout(() => {
      setChatContent({ icon: '✦', label: 'Chat With Flowie' });
    }, 2500);
  };

  return (
    <div className="chat-widget" id="chat-widget" onClick={handleClick}>
      <span className="chat-icon">{chatContent.icon}</span>
      <span className="chat-label">{chatContent.label}</span>
    </div>
  );
}
