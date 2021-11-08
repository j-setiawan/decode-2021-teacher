import React from "react";
import SlidePreview from "../../static/SlidePreview.svg";


const WorkBook = (props) => {
	const name = props.name;
	console.log(name);
	return (
		<div className="flex-row workbook center">
			<img style={{paddingRight:"0.5rem"}} src={SlidePreview} alt="HAPPY" />
			<section className="flex left">
				<strong>{name}</strong>
				<div>{"Class 3-B"}</div>
			</section>
			<div className="flex-row center">
				<section>
					<a href="/">Analytics</a>
				</section>
				<section>
					<button className="secondary"><a href="/storybook">Open</a></button>
				</section>
			</div>
		</div>
	);
};

export default WorkBook;