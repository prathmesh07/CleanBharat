import React,{useEffect} from 'react'
import 'aos/dist/aos.css'; 
 
import AOS from 'aos'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container, Row ,Card} from 'react-bootstrap';

export default function Info() {
    useEffect(()=>{
        AOS.init({duration: 2000});
      }, []);
    return (
        <div className="vi">
            <Header />
            <br /> <br /> <br /><br />
            <Container>
                <Row>
                <Card data-aos="fade-right" className="vii text-center">
                    
                     <Card.Body>
                        <Card.Title>What is a carbon footprint?</Card.Title>
                        <Card.Text>
                        A carbon footprint is the amount of greenhouse gases—primarily carbon dioxide—released into the atmosphere by a particular human activity. A carbon footprint can be a broad meaasure or be applied to the actions of an individual, a family, an event, an organization, or even an entire nation. It is usually measured as tons of CO2 emitted per year, a number that can be supplemented by tons of CO2-equivalent gases, including methane, nitrous oxide, and other greenhouse gases.
                        </Card.Text>
                       
                    </Card.Body>
                   
                    </Card>
                </Row>
                <br /><br />
                <Row>
                <Card data-aos="fade-right" className="vii text-center">
                    
                     <Card.Body>
                        <Card.Title>How is a carbon footprint calculated?</Card.Title>
                        <Card.Text>
                        When calculating a carbon footprint, a lot of factors are taken into consideration. For example, driving to the grocery store burns a certain amount of fuel, and fossil fuels are the primary sources of greenhouses gases. But that grocery store is powered by electricity, and its employees probably drove to work, so the store has its own carbon footprint. In addition, the products that the store sells were all shipped there, so that must also be factored into the total carbon footprint. Beyond that, the fruits, vegetables, and meats that the store sells were all grown or raised on farms, a process that produces methane, which has a greenhouse effect 25 times greater than CO2. All of those elements must be combined to understand the full carbon footprint of a given activity.</Card.Text>
                       
                    </Card.Body>
                   
                    </Card>
                </Row>
                <br /><br />
                <Row>
                <Card data-aos="fade-right" className="vii text-center">
                    
                     <Card.Body>
                        <Card.Title>How can I calculate my carbon footprint?</Card.Title>
                        <Card.Text>
                        Although adding up one’s individual carbon footprint can be difficult, online calculators can do some of the work for you, giving a rough estimate of your carbon footprint based on the size of your household, the efficiency of your appliances, how much you drive or fly, what you eat, and how much you recycle.
                        This isn't perfect, but it is a good way to measure your activities so you can understand roughly how much CO2 they generate and take steps to reduce your carbon footprint.
                        
                        </Card.Text>
                       
                    </Card.Body>
                   
                    </Card>
                </Row>
                <br /><br />
                <Row>
                <Card data-aos="fade-right" className="vii text-center">
                    
                     <Card.Body>
                        <Card.Title>How can I reduce my carbon footprint?</Card.Title>
                        <Card.Text>
                        Methods of reducing your carbon footprint include driving more-efficient vehicles (or making sure that your current vehicles are properly maintained), taking public transportation, using energy-efficient appliances, insulating your home to reduce heating and air conditioning costs, consuming food that doesn't require as much transportation, and eating less meat, which has a higher carbon footprint than fruits and vegetables. Individuals and companies can also offset some of their CO2 emissions by purchasing carbon credits, the money from which can go into projects such as planting trees or investing in renewable energy.
                        </Card.Text>
                       
                    </Card.Body>
                   
                    </Card>
                </Row>
                <br />
            </Container>
            <Footer />
        </div>
    )
}
