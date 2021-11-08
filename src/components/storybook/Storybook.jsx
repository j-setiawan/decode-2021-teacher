import React, { useState, useContext } from "react";
import { MessagingServiceContext } from "../../App";

import "./Storybook.css";

export const CarouselItem = ({ children }) => {
	return (
		<div className="carousel-style">
			{children}
		</div>
	);
};

const Storybook = ({ slides }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const messagingService = useContext(MessagingServiceContext);

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = slides.length - 1;
		} else if (newIndex >= slides.length) {
			newIndex = 0;
		}

		messagingService.publishMessage("workbook/slides", newIndex);

		setActiveIndex(newIndex);
	};

	return (
		<div className="flex-column center">
			<div className="slides">
				<div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
					{slides.map(s => <CarouselItem><img src={s} alt="slide"></img></CarouselItem>)}
				</div>
			</div>
			<div className="flex-row center">
				<button onClick={() => updateIndex(activeIndex - 1)}>Prev</button>
				{slides.map((_, index) => {
					return (
						<section>
							<div
								className={`${index === activeIndex ? "active circle" : "circle"}`}
								onClick={() => {
									updateIndex(index);
								}}
							>
							</div>
						</section>
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
