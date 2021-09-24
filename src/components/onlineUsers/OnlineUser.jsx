import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";

export default function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messageService = useContext(MessagingServiceContext);
  useEffect(() => {
    messageService.subscribeToTopic("onlineUsers", (receviedMsg) => {
      setOnlineUsers((oldArray) => [...oldArray, receviedMsg]);
    });
  }, [messageService]);

  return (
    <div>
      <h1>Online Users:</h1>
      {onlineUsers.map((user, idx) => (
        <p key={idx}>{user}</p>
      ))}
    </div>
  );
}
