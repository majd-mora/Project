import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';
import { Card, Button, Badge } from 'react-bootstrap';
// import Ripples from 'react-ripples';


  
  

export default class Home extends Component {
    render() {
        return (
            <div>
              <Carousel fade>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/sky.jpg"
                    alt="First slide" height="605px" width="240px"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__fadeInDown">Inquisitiveness</h5>
                    <p class="animate__animated animate__fadeInUp">The most effective and successful programmers have a talent for figuring out how something is done and finding ways to do it more efficiently</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img
                    className="d-block w-100"
                    src="./images/road.jpg" height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__backInRight">Self-motivation</h5>
                    <p class="animate__animated animate__backInLeft">The ability to motivate yourself will keep you on the path to constant learning and discovery, which is essential for programmers.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/coding.jpg" height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__fadeInUp">Perseverance</h5>
                    <p class="animate__animated animate__fadeInDown">That is why it is so important to be able to handle failure and keep pushing forward if you want to be a programmer</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/mac.jpg" height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__lightSpeedInRight">Proficiency with programming languages</h5>
                    <p class="animate__animated animate__lightSpeedInLeft">Most programmers typically decide on an area of specialization and then learn the programming language that is most appropriate for that field.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/nasa.jpg" height="605px" width="240px"
                    alt="Second slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__zoomIn">Learning concepts and applying them to other problems</h5>
                    <p class="animate__animated animate__zoomIn">The ability to learn concepts and apply them to other problems is an essential skill for programmers</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/mountain.jpg" height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__slideInUp">Problem-solving capability</h5>
                    <p class="animate__animated animate__slideInDown">Code is often written to solve a problem. You will need to have the ability to identify problems and come up with the most efficient ways to solve them via programming</p>
                  </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item class="carItem">
                  <img className="d-block w-100"
                    src="./images/codecoffee.jpg" height="605px" width="240px"
                    alt="First slide"/>
                  <Carousel.Caption className="caption">
                    <h5 class="animate__animated animate__rollIn">Communication skills</h5>
                    <p class="animate__animated animate__rollIn">Programmers generally spend most of their time working solo in front of a computer</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

                
                {/**Cards: Courses I've Learned */}

                <center style={{margin:"15px"}}>
                <Badge bg="secondary"><h3>Courses I've Learned from Teamtreehouse Technology School</h3></Badge>
                </center>
                <br/>
                <div className="d-flex justify-content-around">
                <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src="./courses/digital.png" alt="digital-literacy"/>
                  <Card.Body>
                    <Card.Title>Digital Literacy</Card.Title>
                    <Card.Text>
                      learning the basics of how computers work.
                      Digital literacy covers basic computing principles,
                      and foundational knowledge of the Internet and World Wide Web.
                    </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/digital-literacy"
                     target="_blank" rel="noreferrer" className="btn">Learn More</Button>
                  </Card.Body>
                </Card>
                

                <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src="./courses/webdesign.jpg" alt="web-design" style={{ height: '218px'}}/>
                  <Card.Body>
                    <Card.Title>Web Design</Card.Title>
                      <Card.Text>
                        Web design refers to the design of websites that are displayed on the internet.
                        It usually refers to the user experience aspects of website development
                        rather than software development.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/web-design" target="_blank" rel="noreferrer">Learn More</Button>
                  </Card.Body>
                </Card>
                </div>
                <br/>


                <div className="d-flex justify-content-around">
                <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src="./courses/frontend.webp" alt="front-end development" style={{ height: '214px'}}/>
                  <Card.Body>
                    <Card.Title>Front End Web Development</Card.Title>
                      <Card.Text>
                        Front End Web Development involves web design and building the sites people use every day.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/front-end-web-development"
                    target="_blank" rel="noreferrer">Learn More</Button>
                  </Card.Body>
                </Card>


                <Card style={{ width: '24rem' }}>
                  <Card.Img variant="top" src="./courses/react.jpg" alt="react"/>
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Text>
                        React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                      </Card.Text>
                    <Button variant="primary" href="https://teamtreehouse.com/tracks/learn-react" target="_blank" rel="noreferrer">Learn More</Button>
                    </Card.Body>
                </Card>
                </div>
                <hr/>
                
                
                
                <Footer />
            </div>
        );
    }
}