import React from "react";

const Student = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div>
      <div style={{textAlign:'left', paddingLeft:'2rem'}} className="student">{name}</div>
    </div>
  );
};

export default Student;