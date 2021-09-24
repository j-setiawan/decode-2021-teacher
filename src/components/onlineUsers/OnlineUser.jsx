import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";

export default function OnlineUsers() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messageService = useContext(MessagingServiceContext);
  useEffect(() => {
    messageService.subscribeToTopic("user", (receviedMsg) => {
      console.debug("user message received");
      setOnlineUsers((oldArray) => [...oldArray, receviedMsg]);
    });
  }, [messageService]);

  return (
    <div>
    <div style={{"overflow-y": "scroll", "max-height": "200px"}} className="scrollingComponent">
        {onlineUsers.map((user, idx) =>
          !!user ? <p key={idx}>{user["name"]}</p> : undefined
        )}
      </div>
    </div>
  );
}
