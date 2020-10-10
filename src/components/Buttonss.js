import React,{useEffect} from 'react'
import { Col,Row,Card,Button, Container} from 'react-bootstrap';
import 'aos/dist/aos.css'; 
 
import AOS from 'aos'

export default function Buttonss() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);
    return (
      <div className="bg">
       <Container >
        <br></br><br></br><br></br><br></br><br></br><br></br>
         <Row>
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
  <Card.Body className="vi">
    <Card.Title>Information</Card.Title>
    <Card.Text>
      Get Information about Carbon Footprints.
    </Card.Text>
    <Button href="/info" variant="success">Get Info</Button>
  </Card.Body>
</Card>
           </Col>
         
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
  <Card.Body className="vi">
    <Card.Title>Show your Efforts</Card.Title>
    <Card.Text>
      Provide us following information ,we gonna display in our news section.
    </Card.Text>
    <Button  href="/newsf" variant="success">Fill form</Button>
  </Card.Body>
</Card>
           </Col>
         </Row>
        



         <br></br><br></br><br></br>
         <Row>
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
  <Card.Body className="vi">
    <Card.Title >Legal Action</Card.Title>
    <Card.Text>
      Get Legal details on environmental Law India.
    </Card.Text>
    <Button href="/report"  variant="success">Guidlines</Button>
  </Card.Body>
</Card>
           </Col>
         
           <Col>
           <Card  data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
  <Card.Body className="vi">
    <Card.Title >Our Team</Card.Title>
    <Card.Text>
      Here, Our team details.
    </Card.Text>
    <Button href="/team" variant="success">Team</Button>
  </Card.Body>
</Card>
           </Col>
         </Row>



       </Container>
       <br></br><br></br><br></br>
       </div>
    )
}
