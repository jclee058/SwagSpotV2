import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Helmet} from 'react-helmet';
import {Routes, Route, Link} from 'react-router-dom';
import Classes from '../pages/Classes';
import Navbar from '../components/Navbar';

import './Pricing.css'

export default function Pricing(){
    return(
        <div>
            <Navbar />
            <Helmet>
                <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
            </Helmet>

            <div className = "pricingPgTitle"> Class Pricing </div>

            <Row>
                <Col className = "priceCol">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={require('../images/dropin.jpeg')} />
                        <Card.Body>
                            <Card.Title className = "cardTitle">Drop-In Classes - $15</Card.Title>
                            <Card.Text className = "priceText">
                            Drop-In classes are a great way to try out a new style and get a feel for it
                            before committing to a whole term. It's important to note that drop-in classes are
                            first come first serve so we recommend registering before coming to the studio. Registration
                            for Drop-In classes is open a week before the day of the class. Spots tend to fill up quick 
                            so try to register as early as you can. We hope to see you soon!
                            </Card.Text>
                            <Button as={Link} to={"/classes"} className = "browseBtn" variant="dark">Browse Classes</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className = "priceCol">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={require('../images/termclass.jpeg')} />
                        <Card.Body>
                            <Card.Title className="cardTitle" >Term Classes - $100</Card.Title>
                            <Card.Text className = "priceText">
                            We offer 2 terms of classes each year: the first term is from September - March and the second term
                            is from April - December. Each class you take for the duration of a term is the price listed above.
                            Registration for the next term is open a month before the term starts. We find that Term classes
                            really allow dancers to see process in their skills since they are training consistently every week.
                            We hope to see you next term!
                            </Card.Text>
                            <Button as={Link} to={"/classes"} className = "browseBtn" variant="dark">Browse Classes</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        <div>
            <Routes>
                <Route path="/classes" element={<Classes/>}></Route>
            </Routes>
        </div>

        </div>
    
    );
}