import React, { useContext, useEffect, useState } from "react";
import { MessagingServiceContext } from "../../App";
import ProgressBar from "../progress-bar/ProgressBar";
import "./Emotions.css";
import SentimentSatisfied from "../../static/sentiment_satisfied.svg";
import SentimentNeutral from "../../static/sentiment_neutral.svg";
import SentimentDissatisfied from "../../static/sentiment_dissatisfied.svg";
export default function Emotions() {
    const [happy, setHappy] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [sad, setSad] = useState(0);
    const [totalEmotes, setTotalEmotes] = useState(0);
    const messageService = useContext(MessagingServiceContext);
    useEffect(() => {
        messageService.subscribeToTopic("emotes", (msg) => {
            const m = msg.toString();
            if (m === "0") {
                setHappy((prev) => prev + 1);
            } else if (m === "1") {
                setNeutral((prev) => prev + 1);
            } else if (m === "2") {
                setSad((prev) => prev + 1);
            }

            setTotalEmotes((prev) => prev + 1);
        })
    }, [messageService]);

  return (
    <div className="Emotions">
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentSatisfied} alt="HAPPY" />
        </div>
        <ProgressBar
          percentage={(happy / totalEmotes) * 100}
        ></ProgressBar>
        <div className="Emotions-result">
          {happy}
        </div>
      </div>
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentNeutral} alt="NEUTRAL" />
        </div>
        <ProgressBar
          percentage={
            (neutral / totalEmotes) * 100
          }
        ></ProgressBar>
        <div className="Emotions-result">
          {neutral}
        </div>
      </div>
      <div className="Emotions-row">
        <div className="Emotions-emoji">
          <img src={SentimentDissatisfied} alt="SAD" />
        </div>
        <ProgressBar
          percentage={(sad / totalEmotes) * 100}
        ></ProgressBar>
        <div className="Emotions-result">{sad}</div>
      </div>
    </div>
  );
};
