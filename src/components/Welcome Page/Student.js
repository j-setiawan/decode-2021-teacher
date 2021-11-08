import React from "react";


const Student = ({name, profilePic, sentiment}) => {
	return (
		<div className="flex-row center student">
			<img src={profilePic} alt="HAPPY" />
			<section className="flex left">
				{name}
			</section>
			<section>
				<img style={{paddingRight:"0.5rem"}} src={sentiment} alt="HAPPY" />
			</section>
			<section>
				<a href="/">View Analytics</a>
			</section>
		</div>
	);
};

export default Student;