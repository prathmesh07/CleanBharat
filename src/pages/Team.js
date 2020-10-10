
import React,{useEffect} from 'react'
import { Col,Row,Card,Button, Container} from 'react-bootstrap';
import Footer from "../components/Footer"
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Header from "../components/Header"

export default function Team() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      }, []);
    return (
        <div className="vii">
            <Header />
            <h1 className="txt">Team</h1>
            
   
      <div className="bg">
          
       <Container >
           <h1>VIT Hacks</h1>
        <br></br><br></br>
         <Row>
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
 
  <Card.Body className="vi">
    <Card.Title>Prathmesh Asole</Card.Title>
    <Card.Text>
      G.H.Raisoni College of Engineering , Nagpur
      <br />
      Dept : Information Technology
      <br />
      Contact : 91-8378903769
    </Card.Text>
    <Button href="www.linkedin.com/in/prathmes
h-asole-749961189" variant="success">Connect on LinkedIn</Button>
  </Card.Body>
</Card>
           </Col>
         
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
 
  <Card.Body className="vi">
  <Card.Title>Mihir Gaikwad</Card.Title>
    <Card.Text>
      G.H.Raisoni College of Engineering , Nagpur
      <br />
      Dept : Information Technology
    </Card.Text>
    <Button href="https://www.linkedin.com/in/mihir-gaikwad-568962189/" variant="success">Connect on LinkedIn</Button>
  </Card.Body>
</Card>
           </Col>
         </Row>
        



         <br></br><br></br>
         <Row>
           <Col>
           <Card data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  
  <Card.Body className="vi">
  <Card.Title>Prateek Senger</Card.Title>
    <Card.Text>
      G.H.Raisoni College of Engineering , Nagpur
      <br />
      Dept : Computer Science 
    </Card.Text>
    <Button href="https://www.linkedin.com/in/prateek-sengar-b12736197/" variant="success">Connect on LinkedIn</Button>
  </Card.Body>
</Card>
           </Col>
         
           <Col>
           <Card  data-aos="zoom-in-up" data-aos-duration="2500" style={{ width: '20rem' }}>
  
  <Card.Body className="vi">
  <Card.Title>Premal Miglani</Card.Title>
    <Card.Text>
      G.H.Raisoni College of Engineering , Nagpur
      <br />
      Dept : Computer Science 
    </Card.Text>
    <Button href="https://www.linkedin.com/in/premal-miglani-9464811b0/" variant="success">Connect on LinkedIn</Button>
  </Card.Body>
</Card>
           </Col>
         </Row>

<br></br><br></br>

       </Container>
       
       </div>
       <Footer />
        </div>
    )
}

