import React, {useState} from "react";
//TO DO - add CSS, map inputs to images
//Strech have ranking

export const Participant = ({participant}) => {
    const [name, setName] = useState(participant.name)
    const [status, setStatus] = useState(participant.status)
    const [emote, setEmote] = useState(participant.emote)
    const [handRaised, setHandRaised] = useState(participant.handRaised)
    return(
        <div><p>{name + " " + status + " " + emote + " " + handRaised}</p></div>
    );
};

const Participants = ({participantsList}) => {
    return (
        <div>
            {participantsList.map(particpant => {
                return (
                    <Participant participant={particpant} />
                )
            })}
        </div>
    );
};

export default Participants