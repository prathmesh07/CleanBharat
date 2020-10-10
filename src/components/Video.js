import React,{useEffect} from 'react'
import fa from "../images/fa.png"
import { Card,Col,Row} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import 'aos/dist/aos.css'; 
 
import AOS from 'aos'

export default function Video() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      }, []);
    return (
        <div>
            <Card className="text-center">
  <Card.Header ><h4>Learn</h4></Card.Header>
  <Card.Body className="vi">
      <Row>
  <Col >
        <ReactPlayer data-aos="fade-right" controls url='https://youtu.be/KdiA12KeSL0' />
        </Col>
       <Col>
       <h4>The Best Ways to Reduce Your Carbon Footprint | Hot Mess</h4>
       <img
      className="logo1"
     src={fa}
     
      alt="First slide"
    />
    </Col>
    </Row>
  </Card.Body>
  <Card.Footer  className=" vii text-muted">By Hot Mess</Card.Footer>
</Card>
        </div>
    )
}
