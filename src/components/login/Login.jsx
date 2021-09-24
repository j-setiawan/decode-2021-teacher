import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import SchoolName from "../../static/SchoolLogo.svg";
import PoweredBy from "../../static/Powered by.png";
import SolaceLogo from "../../static/Solace Logo Black.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleSubmit = () => {
    if (email !== "teacher@school.com" || password !== "admin") setError(true)
    //set routing in the else component
    else
      history.push('/welcome');
  };
  return (
    <div>
        <img style={{marginTop:"3rem"}} src={SchoolName} alt="HAPPY" />
      <div className="loginFormContainer">
        {/* <h2 className="schoolName">Jurassic Primary</h2> */}

        <h5 className="inputHeading">Username *</h5>
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5 className="inputHeading">Password *</h5>
        <input
          type="password"
          className="loginInput"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="loginButton">
          Login
        </button>
        
        {error ? <text>Invalid credentials</text> : <div> &nbsp;</div>}
      </div>
      <div style={{textAlign:"bottom"}}>
      <img style={{marginTop:"7rem"}} src={PoweredBy} alt="HAPPY" />
      &nbsp;
      <img style={{marginTop:"6rem"}} src={SolaceLogo} alt="HAPPY" />
      </div>
      

    </div>
  );
};

export default Login;
