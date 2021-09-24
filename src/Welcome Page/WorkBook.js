import React from "react";

const WorkBook = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div>
      <div style={{textAlign:'left', paddingLeft:'2rem'}} className="workbook">{name}</div>
    </div>
  );
};

export default WorkBook;