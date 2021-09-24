import React from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleSubmit = () => {
    if (email !== "admin@solace.com" || password !== "admin") setError(true);
    //set routing in the else component
  };
  return (
    <div>
      <div className="loginFormContainer">
        <h2 className="schoolName">School Name</h2>
        <h5 className="inputHeading">Email*</h5>
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5 className="inputHeading">Password*</h5>
        <input
          type="password"
          className="loginInput"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="loginButton">
          Login
        </button>
        {error ? <div>Invalid credentials</div> : undefined}
      </div>
    </div>
  );
};

export default Login;
