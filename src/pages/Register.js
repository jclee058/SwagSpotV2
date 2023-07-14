import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import {Helmet} from 'react-helmet';
import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';



import './Register.css'


export default function Register(){
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('option2');
    const [firstNameStatus, setFirstNameStatus] = useState(false);
    const [lastNameStatus, setLastNameStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [phoneStatus, setPhoneStatus] = useState(false);

    //Checkbox 1
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
    const [check11, setCheck11] = useState(false);
    const [check12, setCheck12] = useState(false);
    const [check13, setCheck13] = useState(false);
    const [check14, setCheck14] = useState(false);
    const [check15, setCheck15] = useState(false);
    const [check16, setCheck16] = useState(false);
    const [check17, setCheck17] = useState(false);
    const [check18, setCheck18] = useState(false);


    const handleCheck1 = () =>{setCheck1(!check1);};
    const handleCheck2 = () =>{setCheck2(!check2);};
    const handleCheck3 = () =>{setCheck3(!check3);};
    const handleCheck4 = () =>{setCheck4(!check4);};
    const handleCheck5 = () =>{setCheck5(!check5);};
    const handleCheck6 = () =>{setCheck6(!check6);};
    const handleCheck7 = () =>{setCheck7(!check7);};
    const handleCheck8 = () =>{setCheck8(!check8);};
    const handleCheck9 = () =>{setCheck9(!check9);};
    const handleCheck10 = () =>{setCheck10(!check10);};
    const handleCheck11 = () =>{setCheck11(!check11);};
    const handleCheck12 = () =>{setCheck12(!check12);};
    const handleCheck13 = () =>{setCheck13(!check13);};
    const handleCheck14 = () =>{setCheck14(!check14);};
    const handleCheck15 = () =>{setCheck15(!check15);};
    const handleCheck16 = () =>{setCheck16(!check16);};
    const handleCheck17 = () =>{setCheck17(!check17);};
    const handleCheck18 = () =>{setCheck18(!check18);};

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const firstChangeHandler = (value) => {
        if(value.length !== 0){
            setFirstNameStatus(true);
        }
        if (value.length <= 0){
            setFirstNameStatus(false);
        }
    };

    const lastChangeHandler = (value) => {
        if(value.length !== 0){
            setLastNameStatus(true);
        }
        if (value.length <= 0){
            setLastNameStatus(false);
        }
    };

    const emailChangeHandler = (value) => {
        if(value.length !== 0){
            setEmailStatus(true);
        }
        if (value.length <= 0){
            setEmailStatus(false);
        }
    };

    const phoneChangeHandler = (value) => {
        if(value.length !== 0){
            setPhoneStatus(true);
        }
        if (value.length <= 0){
            setPhoneStatus(false);
        }
    };


    const validate = () =>{
        if((firstNameStatus === true) && (lastNameStatus === true) &&(emailStatus === true) &&(phoneStatus === true)){
            //validate checkbox selection
            if(check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8 || check9 || check10 || check11 || check12 || check13 || check14 || check15 || check16 || check17 || check18){
                navigate('/confirmationR');
            }
            else{
                alert("Please enter a class style selection!");
            }
        }
    };

    return(
        <div>
            <Navbar />
            <Helmet>
                <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
            </Helmet>
            <Container className="regForm">
                <Form>
                    <Row>
                        <Col>
                            <h1 className="regFormTitle">Registration Form</h1>
                            <p className="regFormSubText"> *Please note that drop-in classes are not available for registration until a week in advance*</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Registration Type</h1>
                            <p className="regFormSubText"> *Please visit the Pricing page for more details about the Registration Type</p>
                        </Col>
                    </Row>
                    <Row> 
                        <div className="btnGroup">
                            <input
                                type="radio"
                                name="options"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleOptionChange}
                                id="dropInBtn"
                            />
                            <label className="radioLabel">Drop-in</label>
                            <input
                                type="radio"
                                name="options"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleOptionChange}
                                id="termBtn"
                            />
                            <label className="radioLabel">Term</label>
                        </div>  
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Dancer Information</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control onChange={e => firstChangeHandler(e.target.value)} className="formInputBox" placeholder="First name" />
                            {firstNameStatus === false &&(
                                <p className = "errorMsg">Please enter a first name</p>
                            )}
                        </Col>
                        <Col>
                            <Form.Control onChange={e => lastChangeHandler(e.target.value)} className="formInputBox" placeholder="Last name" />
                            {lastNameStatus === false &&(
                                <p className = "errorMsg">Please enter a last name</p>
                            )}
                        </Col>
                    </Row>
                    <Row className="secondInputRow">
                        <Col>
                            <Form.Control onChange={e => emailChangeHandler(e.target.value)} className="formInputBox" placeholder="Email Address" />
                            {emailStatus === false &&(
                                <p className = "errorMsg">Please enter an email address</p>
                            )}
                        </Col>
                        <Col>
                            <Form.Control onChange={e => phoneChangeHandler(e.target.value)} className="formInputBox" placeholder="Phone Number" />
                            {phoneStatus === false &&(
                                <p className = "errorMsg">Please enter a phone number</p>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormSubTitle">Class Style</h1>
                            <p className="regFormSubText"> *Please select ALL classes that you would like to join*</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Monday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Tuesday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Wednesday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Thursday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Friday</h1>
                        </Col>
                        <Col>
                            <h1 className="regFormDayTitle">Saturday</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">6pm</h1>
                        </Col>
                        <Col> 
                            <div key={"bh"} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={"bh"}
                                    label="Beginner House"
                                    onChange = {handleCheck1}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={"bb"} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={"bb"}
                                    label="Beginner Breaking"
                                    onChange = {handleCheck2}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={"ih"} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={"ih"}
                                        label="Intermediate House"
                                        onChange = {handleCheck3}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Breaking"
                                    onChange = {handleCheck4}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Advanced Breaking"
                                        onChange = {handleCheck5}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Popping"
                                    onChange = {handleCheck6}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">7pm</h1>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Beginner Popping"
                                        onChange = {handleCheck7}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Shuffle"
                                    onChange = {handleCheck8}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Waacking"
                                    onChange = {handleCheck9}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Intermediate Shuffle"
                                        onChange = {handleCheck10}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced House"
                                    onChange = {handleCheck11}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Advanced Popping"
                                        onChange = {handleCheck12}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="regFormDayTitle">8pm</h1>
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Beginner Open Choreo"
                                    onChange = {handleCheck13}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Beginner Waacking"
                                        onChange = {handleCheck14}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Intermediate Open Choreo"
                                    onChange = {handleCheck15}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Advanced Shuffle"
                                        onChange = {handleCheck16}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col>
                            <div key={`default-${'checkbox'}`} className="mb-3">
                                <Form.Check
                                    type={'checkbox'}
                                    id={`default-${'checkbox'}`}
                                    label="Advanced Open Choreo"
                                    onChange = {handleCheck17}
                                />
                            </div>
                        </Col>
                        <Col>
                            {selectedOption === 'option2' &&(
                                <div key={`default-${'checkbox'}`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={`default-${'checkbox'}`}
                                        label="Advanced Open Choreo"
                                        onChange = {handleCheck18}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                    <div className="btnDiv">
                        <Button onClick={validate} variant="dark" className="confirmRegBtn"> Confirm Registration </Button>
                    </div>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1> </h1>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}