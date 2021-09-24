import React from "react";
import WorkBook from './WorkBook';
import Student from './Student';
import './WelcomePage.css'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';


const welcomeInfo = {
    userName: "Mrs Flanders",
    workbooks: ["Dinosaurs", "Dinosaurs Eggs", "Dinosaur Train", "Dino Run!"],
    students: ["Donald","Duck","Mr. Dino","T-Rex","Mickey","Rickey", "Winny", "the", "Pooh", "Donald","Duck","Mr. Dino","T-Rex","Mickey Mouse"]
  
  }

const WelcomePage = (props) => {
  const { userName, workbooks, students} = welcomeInfo;
  console.log(userName, workbooks, students);
  return (
    <div>
        <h1 style={{textAlign:'left', padding:'2rem'}}>Welcome <strong>{userName}!</strong></h1>
        <div className="flex-container">
            <div className="flex-child">
                <h2 style={{textAlign:'left', paddingLeft:'2rem'}}>Today's Workbooks</h2>
                {
                workbooks.map(workbook =>{
                return (<div> <WorkBook name={workbook}
                />  <Divider style={{marginLeft:'2rem',marginRight:'2rem'}}/></div>);
                }
                )
                }
                <br/>
                <h2 style={{textAlign:'left', paddingLeft:'2rem'}}>Recently Used</h2>
                {
                workbooks.map(workbook =>{
                return (<div> <WorkBook name={workbook}
                />  <Divider style={{marginLeft:'2rem',marginRight:'2rem'}}/></div>);
                }
                )
                }
            </div>
            <div className="flex-child">
                <h2 style={{textAlign:'left', paddingLeft:'2rem'}}>My Students</h2>
                <TextField size="small" style={{width:'90%', margin:"1rem"}} id="outlined-search" label="Search field" type="search" />

                {
                students.map(student => {
                  return (<div> <Student name={student}
                />  <Divider style={{marginLeft:'2rem',marginRight:'2rem'}}/></div>);
                })
                }
            </div>
            
    </div>
    </div>
  );
};

export default WelcomePage;