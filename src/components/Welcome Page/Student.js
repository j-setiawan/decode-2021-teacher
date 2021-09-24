import React from "react";
import { Container,Button,Row, Col } from 'react-bootstrap';
import SentimentSatisfied from "../../static/sentiment_satisfied.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from "../../static/ProfilePic.svg";


const Student = (props) => {
  const name = props.name;
  console.log(name);
  return (
    <div>
      
      <div style={{textAlign:'left', paddingLeft:'1rem'}} className="student">
        
      <Container>
            <Row style={{margin:"0.3rem", padding:"0.2rem",alignItems: 'center'}}>
                <Col md={4}>
                  <img style={{paddingRight:"0.5rem"}} src={ProfilePic} alt="HAPPY" />
                  {name}
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <img style={{paddingRight:"0.5rem"}} src={SentimentSatisfied} alt="HAPPY" />
                    <Button variant="outline-primary">Analytics</Button>{' '}
                </Col>
            </Row>
          </Container>    
      
      </div>
    </div>
  );
};

export default Student;