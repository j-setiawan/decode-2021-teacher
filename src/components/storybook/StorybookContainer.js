import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Storybook, { CarouselItem } from "./Storybook";
import StoryBookSidePanel from "../sidepanels/StoryBookSidePanel";
import styled from "styled-components";

const ViewerImg = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const StoryBookContainer = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div className="StoryBookContainer">
      <Storybook>
        <CarouselItem>
          <ViewerImg className="slide-image" src={`/Slide1.png`} alt="" />
        </CarouselItem>
        <CarouselItem>
          <ViewerImg className="slide-image" src={`/Slide2.png`} alt="" />
        </CarouselItem>
        <CarouselItem>
          <ViewerImg className="slide-image" src={`/Slide3.png`} alt="" />
        </CarouselItem>
        <CarouselItem>
          <ViewerImg className="slide-image" src={`/Slide4.png`} alt="" />
        </CarouselItem>
      </Storybook>
      <StoryBookSidePanel />
    </div>
  );
};

export default StoryBookContainer;
