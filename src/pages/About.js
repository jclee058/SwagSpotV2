import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from '../components/Navbar';

import {Helmet} from 'react-helmet';

import './About.css';


export default function About(){
    return(
        <div>
        <Navbar />
        <Helmet>
            <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
        </Helmet>
        
        <Container>
            <Row>
                <Col sm={5}>
                    <Card className="aboutCard">
                        <Card.Body>
                            <Card.Title className="aboutTitle">About Us</Card.Title>
                            <Card.Text className="aboutDesc">
                                Here at The Swag Spot, we focus on creating a welcoming environment for all dancers allowing 
                                them to learn and challenge themselves in different styles of Hip Hop. We offer style classes 
                                focused on Breaking, House, Popping, Shuffle, and Waacking to help dancers learn more about 
                                a specific style. Our dancers also love our Open Choreo classes which allow you to put your skills learned
                                in style focused classes to the test. You can learn more
                                about our instructors below, or visit the classes tab to learn more about our classes, schedule
                                and pricing. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={7} className="aboutCarousel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg1"
                            src={require('../images/aboutus1.jpeg')}
                            alt="Instructor teaching a dance class of younger dancers."
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg2"
                            src={require('../images/aboutus2.jpeg')}
                            alt="Group of dancers executing choreography, paused with one leg up."
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id = "aboutImg3"
                            src={require('../images/aboutus3.jpeg')}
                            alt="Group of dancers reviewing choreography in class."
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        <Container className="instContainer">
            <Row>
                <Col className="meetInstTitle">Meet Our Instructors</Col>
            </Row>
            <Row className="instRow">
                <Col>
                    <Card  className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor1.jpeg')} className="instImg" alt="Head shot of instructor Jordan Smith" />
                        <Card.Body>
                            <Card.Title className="instCardTitle">Jordan Smith</Card.Title>
                            <Card.Text>
                                <Accordion className="instAccordion" defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Jordan Smith has been teaching at the Swag Spot for 2 years now and 
                                        enjoys teaching House and Open Choreo classes. You can catch him on 
                                        Mondays for Beginner House and on Friday for Advanced House and Open Choreo classes!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor2.jpeg')} className="instImg" alt="Head shot of instructor Jennifer Greene" />
                        <Card.Body>
                            <Card.Title className="instCardTitle">Jennifer Greene </Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Jennifer has been teaching at the Swag Spot for 3 years now 
                                        and really gravitates towards Shuffle, House, and Popping styles.
                                        Currently, you can catch Jennifer on Thursdays for Intermediate and Advanced Shuffle.
                                        You can also find her at the studio on Mondays and Saturdays for Popping!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor3.jpeg')} className="instImg" alt="Head shot of instructor Stacey Torres"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Stacey Torres</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Stacey has been teaching at the Swag Spot for 2 years now and loves 
                                        to Shuffle, and teach Open Choreo classes. You can catch Stacey at the
                                        studio on Tuesdays for Beginner Shuffle, and on Saturdays for our
                                        Advanced Open Choreo class. 
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="instRow">
                <Col>
                    <Card className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor4.jpeg')} className="instImg" alt="Head shot of instructor Bethany Vega"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Bethany Vega</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Bethany has been teaching at the Swag Spot for 4 years now and loves 
                                        to teach our Waacking classes. You can find her at the studio on 
                                        Tuesdays and Wednesdays for our Beginner and Intermediate Waacking classes!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor5.jpeg')} className="instImg" alt="Head shot of instructor Kenneth Gibbs"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Kenneth Gibbs</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Kenneth is the owner of the Swag Spot and he loves to Break and 
                                        some good House choreography. You can catch Kenneth here at the studio
                                        on Tuesdays, Thursdays, and Fridays for Breaking. He also teaches our 
                                        Wednesday night Intermediate House class!
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="teacherCard" style={{ width: '19rem' }}>
                        <Card.Img variant="top" src={require('../images/instructor6.jpeg')} className="instImg" alt="Head shot of instructor Rebbeca Jones"/>
                        <Card.Body>
                            <Card.Title className="instCardTitle">Rebbeca Jones</Card.Title>
                            <Card.Text>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="accordText">Learn More</Accordion.Header>
                                        <Accordion.Body className="accordText">
                                        Rebbeca has been teaching at the Swag Spot for 3 years now. She loves all styles of Hip Hop equally which is why she loves
                                        to teach some of our Open Choreo classes. You can find Rebecca at the studio on
                                        Monday and Wednesday nights teaching our Beginner and Intermediate Open Choreo classes.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="meetInstTitle"> </Col>
            </Row>
        </Container>
    </div>
    );
}