import React from 'react'
import w from "../images/w.jpg"
import w3 from "../images/w3.png"
import w2 from "../images/w2.jpg"
import { Carousel ,CarouselItem} from 'react-bootstrap';
import '../App.css';

export default function Hero() {
    return (
        <div>

<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100 m"
     src={w}
     
      alt="First slide"
    />
    <Carousel.Caption>
    
      <p className="h">According to WHO, a carbon footprint is a measure of the impact your activities have on the amount of carbon dioxide (CO2) produced through the burning of fossil fuels and is expressed as a weight of CO2 emissions produced in tonnes.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m"
      src={w2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p className="h">driving to the grocery store burns a certain amount of fuel, and fossil fuels are the primary sources of greenhouses gases. But that grocery store is powered by electricity, and its employees probably drove to work, so the store has its own carbon footprint</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="m w-100 "
      src={w3}
       alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p className="h">Greenhouse gases, including the carbon-containing gases carbon dioxide and methane, can be emitted through the burning of fossil fuels, land clearance and the production and consumption of food, manufactured goods, materials, wood, roads, buildings, transportation and other services.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}
