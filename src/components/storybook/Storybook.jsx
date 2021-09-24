import React, { useState, useContext } from "react";
import { MessagingServiceContext } from "../../App";

import "./Storybook.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-style" style={{ width: width }}>
      {children}
    </div>
  );
};

const Storybook = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const messagingService = useContext(MessagingServiceContext);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    messagingService.publishMessage("workbook/slides", newIndex);

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Storybook;
