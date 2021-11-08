import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import SchoolName from "../../static/SchoolLogo.svg";
import PoweredBy from "../../static/Powered by.png";
import SolaceLogo from "../../static/Solace Logo Black.png";

const Login = () => {
	const history = useHistory();
	const handleSubmit = () => {
		history.push('/welcome');
	};
	return (
		<>
			<div className="loginFormContainer flex-column">
				<img src={SchoolName} alt="HAPPY" />
				<section>
					<label className="inputHeading">Username *</label>
					<input type="text" className="loginInput" data-lpignore="true"/>
				</section>
				<section>
					<label className="inputHeading">Password *</label>
					<input type="password" className="loginInput" name="password" data-lpignore="true"/>
				</section>
				<section>
					<button onClick={handleSubmit} className="loginButton">Login</button>
				</section>
				<section className="center">
					<a href="/">Forgot your password?</a>
				</section>
			</div>
			<footer>
				<div>
					<img style={{marginTop: "8px", marginRight: "8px"}} src={PoweredBy} alt="Powered by" />
				</div>
				<div>
					<img src={SolaceLogo} alt="Solace" />
				</div>
			</footer>
		</>
	);
};

export default Login;
