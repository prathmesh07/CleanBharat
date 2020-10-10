import React from 'react'
import Header from "../components/Header"
import { Container,Card} from 'react-bootstrap';
import Footer from "../components/Footer"

export default function News() {
    return (
        <div className="vii">
            <Header />
             <br/><br/><br/>
             <Container>
             <Card>
  <Card.Header>Post 1</Card.Header>
  <Card.Body>
    <Card.Title>Headline</Card.Title>
    <Card.Text>
     comming soon...
    </Card.Text>
  
  </Card.Body>
</Card>
<br />
<Card>
  <Card.Header>Post 2</Card.Header>
  <Card.Body>
    <Card.Title>Headline</Card.Title>
    <Card.Text>
    comming soon...
    </Card.Text>
  </Card.Body>
</Card>
<br />
<Card>
  <Card.Header>Post 3</Card.Header>
  <Card.Body>
    <Card.Title>Headline</Card.Title>
    <Card.Text>
    comming soon...
    </Card.Text>
  </Card.Body>
</Card>
<br />
<Card>
  <Card.Header>Post 4</Card.Header>
  <Card.Body>
    <Card.Title>Headline</Card.Title>
    <Card.Text>
    comming soon...
    </Card.Text>
  </Card.Body>
</Card>
</Container>
<Footer />
        </div>
    )
}
