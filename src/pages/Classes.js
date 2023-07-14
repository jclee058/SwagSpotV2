import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../components/Navbar';
import './Classes.css'

export default function Classes(){
    
    const [checkedAll, setCheckedAll] = React.useState(true); //keeps track of if we need to show all cards
    const [checkedB, setCheckedB] = React.useState(false); //beginner checkbox
    const [checkedI, setCheckedI] = React.useState(false); //intermediate checkbox 
    const [checkedA, setCheckedA] = React.useState(false); //advanced checkbox
    const [checkedBreaking, setCheckedBreaking] = React.useState(false); //breaking checkbox
    const [checkedHouse, setCheckedHouse] = React.useState(false); //house checkbox
    const [checkedOpen, setCheckedOpen] = React.useState(false); //open choreo checkbox
    const [checkedPop, setCheckedPop] = React.useState(false); //popping checkbox
    const [checkedShuffle, setCheckedShuffle] = React.useState(false); //shuffling checkbox
    const [checkedWaack, setCheckedWaack] = React.useState(false); //waacking checkbox

    //handle functions for checkboxes
    const handleChangeAll = () => {
        setCheckedAll(!checkedAll);
    }
    const handleChangeB = () => {
        setCheckedB(!checkedB);
    };

    const handleChangeI = () => {
        setCheckedI(!checkedI);
    };

    const handleChangeA = () => {
        setCheckedA(!checkedA);
    };

    const handleChangeBreaking = () => {
        setCheckedBreaking(!checkedBreaking);
    };

    const handleChangeHouse = () => {
        setCheckedHouse(!checkedHouse);
    };

    const handleChangeOpen = () => {
        setCheckedOpen(!checkedOpen);
    };

    const handleChangePop = () => {
        setCheckedPop(!checkedPop);
    };

    const handleChangeShuffle = () => {
        setCheckedShuffle(!checkedShuffle);
    };
    const handleChangeWaack = () => {
        setCheckedWaack(!checkedWaack);
    };

    //defining a checkbox 
    const Checkbox = ({label, value, onChange}) => {
        return(
            <label className = "checkBoxLabel">
                <input type="checkbox" checked={value} onChange={onChange}/>
                {label}
            </label>
        )
    };

    return(
        <>
            <Navbar />
            <Container id="pageContainer">
                <Row>
                    <Col sm={2} id = "filterCol">
                        
                        <div>
                            <Row className = "refineSearchTitle"> Refine Your Search </Row>
                            <Row>
                                <Checkbox
                                    label = "All"
                                    value = {checkedAll}
                                    onChange = {handleChangeAll}
                                />
                            </Row>
                            <Row className = "skillTitle"> Skill Level </Row>
                            <Row>
                                <Checkbox
                                    label = "Beginner"
                                    value = {checkedB}
                                    onChange = {handleChangeB}
                                /> 
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Intermediate"
                                    value = {checkedI}
                                    onChange = {handleChangeI}
                                /> 
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Advanced"
                                    value = {checkedA}
                                    onChange = {handleChangeA}
                                />
                            </Row>
                            <Row className = "styleTitle"> Dance Style </Row>
                            <Row>
                                <Checkbox
                                    label = "Breaking"
                                    value = {checkedBreaking}
                                    onChange = {handleChangeBreaking}
                                />
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "House"
                                    value = {checkedHouse}
                                    onChange = {handleChangeHouse}
                                />
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Open Choreo"
                                    value = {checkedOpen}
                                    onChange = {handleChangeOpen}
                                />
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Popping"
                                    value = {checkedPop}
                                    onChange = {handleChangePop}
                                />
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Shuffle"
                                    value = {checkedShuffle}
                                    onChange = {handleChangeShuffle}
                                />
                            </Row>
                            <Row>
                                <Checkbox
                                    label = "Waacking"
                                    value = {checkedWaack}
                                    onChange = {handleChangeWaack}
                                />
                            </Row>
                        </div>
                    </Col>
                    <Col sm={10} id="resultCol">
                        <div className = "classPgTitle"> Classes </div>
                        <Row>
                            {(checkedB || checkedBreaking || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/begbreak.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Beginner Breaking</Card.Title>
                                        <Card.Text className = "cardText">
                                        New to breaking? Come join us for a beginner class and learn some sweet new tricks!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedI || checkedBreaking || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/intbreak.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Intermediate Breaking</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you've been to the beginner class and think you're ready for more of a challenge? Let's see what you've got!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedA || checkedBreaking || checkedAll ) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/advbreak.jpeg')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Advanced Breaking</Card.Title>
                                        <Card.Text className = "cardText">
                                        Wow you're a seasoned dancer in this style so come show of some skills!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedB || checkedHouse || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/beghouse.jpg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Beginner House</Card.Title>
                                        <Card.Text className = "cardText">
                                        Like to bounce and groove? If you're new to House come join us for a beginner class!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )} 
                            {(checkedI || checkedHouse || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/inthouse.jpeg')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Intermediate House</Card.Title>
                                        <Card.Text className = "cardText">
                                        Okay so you've been to the beginner class and need more of a challenge... we hear you!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedA || checkedHouse || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/advhouse.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Advanced House</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you've been grooving this whole time? You're a seasoned dancer in this style, so come show off!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedB || checkedOpen || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/begopenchoreo.jpeg')}/>
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle"> Beginner Open Choreo</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you're ready to try and combine all your skills... we see you, so come join us for a beginner open class!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedI || checkedOpen || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/intopenchoreo.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Intermediate Open Choreo</Card.Title>
                                        <Card.Text className = "cardText">
                                        You're getting the hang of these open classes so let's pick up the pace...just a little we promise!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedA || checkedOpen || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/advopenchoreo.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Advanced Open Choreo</Card.Title>
                                        <Card.Text className = "cardText">
                                        Now we're ready to have some fun. Our teachers always bring the heat for these advanced classes!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedB || checkedPop || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/begpopping.webp')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Beginner Popping</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you want to learn how to pop? And you have some previous dance experience already? We love it, come learn with us!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedI || checkedPop || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/intpopping.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Intermediate Popping</Card.Title>
                                        <Card.Text className = "cardText">
                                        You've been to the beginner class and are ready for more of a challenge. Let's do this intermediate style!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedA || checkedPop || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/advpopping.webp')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Advanced Popping</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you've been popping with us for some time now and are ready to really challenge yourself. Well we're here to challenge you!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedB || checkedShuffle || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/begshuffle.avif')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Beginner Shuffle</Card.Title>
                                        <Card.Text className = "cardText">
                                        Interested in learning some fancy footwork you can show off? Then come join us for a beginner Shuffle class!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedI || checkedShuffle || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/intshuffle.webp')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Intermediate Shuffle</Card.Title>
                                        <Card.Text className = "cardText">
                                        You've got the basics down and are ready to learn some cooler Shuffle steps. Come learn some more challenging steps with us!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedA || checkedShuffle || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/advshuffle.jpeg')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Advanced Shuffle</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you've got some basic and some cool shuffle steps down... let's put them together now... advanced style!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedB || checkedWaack || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/begwaack.webp')} />
                                    <Card.Body>
                                        <div className = "tag"> Term </div>
                                        <Card.Title className = "cardTitle">Beginner Waacking</Card.Title>
                                        <Card.Text className = "cardText">
                                        So you want to learn how to use sharp arms movement in Hip Hop, then this is the class for you.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                            {(checkedI || checkedWaack || checkedAll) &&(
                                <Card style={{ width: '18rem' }} className = "classCard">
                                    <Card.Img className="cardImg" src={require('../images/intwaack.jpeg')} />
                                    <Card.Body>
                                        <Row>
                                            <div className = "tag"> Drop-in </div>
                                            <div className = "tag"> Term </div>
                                        </Row>
                                        <Card.Title className = "cardTitle">Intermediate Waacking</Card.Title>
                                        <Card.Text className = "cardText">
                                         You've been to the beginner class and are ready to take it up a notch. Well let's go then!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
} 