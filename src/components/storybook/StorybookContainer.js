import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Storybook, { CarouselItem } from "./Storybook";
import StoryBookSidePanel from "../sidepanels/StoryBookSidePanel";

const StorybookContainer = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div
      className="StoryBookContainer"
    >
      <Storybook>
        <CarouselItem>
          <h3>Dinosaurs</h3>
        </CarouselItem>
        <CarouselItem>
          <h3>Second Slide Label</h3>
        </CarouselItem>
        <CarouselItem>
          <h3>Third Slide Label</h3>
        </CarouselItem>
      </Storybook>
      <StoryBookSidePanel /> 
    </div>
  );
};

export default StorybookContainer;
