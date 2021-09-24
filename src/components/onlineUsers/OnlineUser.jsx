import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";

export default function OnlineUsers() {
  // const [msg, setMsg] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messageService = useContext(MessagingServiceContext);
  useEffect(() => {
    messageService.subscribeToTopic("user", (receviedMsg) => {
      setOnlineUsers((oldArray) => [...oldArray, receviedMsg]);
    });
  }, [messageService]);

  return (
    <div>
      {onlineUsers.map((user, idx) => (
        <p key={idx}>{user}</p>
      ))}
    </div>
  );
}
