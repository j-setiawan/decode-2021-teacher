import React from "react";
import { Container,Button,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import SlidePreview from "../../static/SlidePreview.svg";


const WorkBook = (props) => {
  const name = props.name;
  console.log(name);
  return (
      <div style={{textAlign:'left', paddingLeft:'1rem'}} className="workbook">
          <Container>
            <Row style={{margin:"0.3rem", padding:"0.2rem",alignItems: 'center'}}>
                <Col md={2}>
                  <img style={{paddingRight:"0.5rem"}} src={SlidePreview} alt="HAPPY" />
                </Col>
                <Col md={2}>
                    <h4>{name}</h4>
                    {"Class 3-B"}
                    </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <Button variant="outline-primary">Analytics</Button>{' '}
                    <Link to="/storybook">
                        <Button variant="primary">Open</Button>{' '}
                    </Link>
                </Col>
            </Row>
          </Container>    
        </div>
  );
};

export default WorkBook;