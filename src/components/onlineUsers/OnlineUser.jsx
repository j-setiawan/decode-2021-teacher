import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";

export default function OnlineUsers() {
  const [msg, setMsg] = useState("");
  const messageService = useContext(MessagingServiceContext);
  useEffect(() => {
    messageService.subscribeToTopic("onlineUsers", setMsg);
  }, [messageService]);

  return <div>Received message: {msg}</div>;
}