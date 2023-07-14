import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Helmet} from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Navbar';

import './Schedule.css';

export default function Schedule(){
    return(

        <div>
            <Navbar />
            <Helmet>
                <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
            </Helmet>

            <div className = "scheduleTitle"> Current Class Schedule </div>
            <Container> 
                `<Row className = "dayRow">
                    <Col>
                        <h1> </h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Monday</h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Tuesday</h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Wednesday</h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Thursday</h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Friday</h1>
                    </Col>
                    <Col>
                        <h1 className="dayTitle">Saturday</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className = "timeCol">
                        <h1 className="timeTitle">6:00pm</h1>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner House
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner Breaking
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Intermediate House
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Intermediate Breaking
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced Breaking
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div  className="mb-3" id= "mb">
                            Intermediate Popping
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className = "timeCol">
                        <h1 className="timeTitle">7:00pm</h1>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner Popping
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner Shuffle
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Intermediate Waacking
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Intermediate Shuffle
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced House
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced Popping
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className = "timeCol">
                        <h1 className="timeTitle">8:00pm</h1>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner Open Choreo
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Beginner Waacking
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Intermediate Open Choreo
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced Shuffle
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced Open Choreo
                        </div>
                    </Col>
                    <Col className = "classCol">
                        <div className="mb-3" id= "mb">
                            Advanced Open Choreo
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}