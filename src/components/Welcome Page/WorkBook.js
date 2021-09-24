import React from "react";
import { Container,Button,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const WorkBook = (props) => {
  const name = props.name;
  console.log(name);
  return (
      <div style={{textAlign:'left', paddingLeft:'1rem'}} className="workbook">
          <Container>
            <Row style={{margin:"0.3rem", padding:"0.2rem",border: "2px solid rgb(177, 181, 182)",alignItems: 'center'}}>
                <Col md={4}>
                    {name}
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