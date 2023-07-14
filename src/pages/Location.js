import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Helmet} from 'react-helmet';
import Navbar from '../components/Navbar';

import './Location.css';

export default function Location(){
    return(
    <div>
        <Navbar />
        <Helmet>
            <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
        </Helmet>
        <Container>
            <Row>
                <Col sm={7}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3697899487174!2d-75.68590958859043!3d45.42204653613036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0507dfb42a6f%3A0x902cebb3d8512f15!2s123%20University%20Private%2C%20Ottawa%2C%20ON%20K1N%209B1!5e0!3m2!1sen!2sca!4v1689121148275!5m2!1sen!2sca" 
                            title="mapsEmbed"
                            id="mapsEmbed"
                            width="600" 
                            height="550" 
                            style={{border:"0"}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </Col>
                <Col sm={5}>
                <Card className="locationCard">
                        <Card.Body>
                            <Card.Title className="locationTitle">Location</Card.Title>
                            <Card.Text>
                                <p className="locationDesc1">We are located at 123 University Private, in the heart of downtown Ottawa.</p>
                                <p className="locationDesc2">Parking is free and can be found around the back of the building.</p>
                                <p className="locationDesc2">Our facilities open 30 mins before the first class of the night to allow dancers to come in and warm up before class.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    );
}