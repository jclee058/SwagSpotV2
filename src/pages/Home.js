import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Routes, Route, Link} from 'react-router-dom';
import Classes from '../pages/Classes';
import Navbar from '../components/Navbar';

import './Home.css';

export default function Home(){
    return(
    <div>
        <Navbar />
        <div className="mainHomeDiv">
            <Container>
                <Card className="homeCard">
                    <Card.Body>
                        <Card.Title className="homeTitle">The Swag Spot</Card.Title>
                        <Card.Text className="homeDesc">
                            Located in Downtown Ottawa
                        </Card.Text>
                        <Button as={Link} to={"/classes"} variant="dark" className="learnBtn">Learn more</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
        <div>
            <Routes>
                <Route path="/classes" element={<Classes/>}></Route>
            </Routes>
        </div>

    </div>
    );
}