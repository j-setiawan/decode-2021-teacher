import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";

export default function OnlineUsers() {
	const [onlineUsers, setOnlineUsers] = useState([
	]);
	const messageService = useContext(MessagingServiceContext);
	useEffect(() => {
		messageService.subscribeToTopic("user", (receviedMsg) => {
			setOnlineUsers((oldArray) => [...oldArray, receviedMsg]);
		});
	}, [messageService]);

	return (
		<div>
		<div className="scrollingComponent">
				{onlineUsers.map((user, idx) => <div key={idx}>{user["name"]}</div>)}
			</div>
		</div>
	);
}
