import React, { useRef, useEffect, useState } from "react";
import { MessagingService } from "../../MessagingService";

const MessagingServiceContext = React.createContext();
const messagingService = new MessagingService();

export default function OnlineUsers() {
  const messageService = useRef(messagingService);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const connectToBroker = async () => await messageService.current.connect();
    const cleanup = () => messageService.current.disconnect();
    connectToBroker();
    messageService.current.subscribeToTopic("foo", setOnlineUsers);
    return cleanup;
  }, [messageService]);
  return (
    <div className="onlineUsers">
      <MessagingServiceContext.Provider value={messagingService}>
        {onlineUsers.map((user) => (
          <div className="userClass">
            <p>{user["name"]}</p>
            <span className="dot"></span>
          </div>
        ))}
      </MessagingServiceContext.Provider>
    </div>
  );
}
