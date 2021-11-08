import React from "react";
import Storybook from "./Storybook";
import StoryBookSidePanel from "../sidepanels/StoryBookSidePanel";
import "./StorybookContainer.css";

const slides = [
  "/Slide1.png", "/Slide2.png", "/Slide3.png", "/Slide4.png"
]

const StoryBookContainer = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div className="StoryBookContainer flex-row">
      <div className="m32 flex flex-column">
        <h1>Workbook Selected: Dinosaurs</h1>
        <section className="flex">
          <Storybook slides={slides}>
          </Storybook>
        </section>
      </div>
      <StoryBookSidePanel />
    </div>
  );
};

export default StoryBookContainer;
