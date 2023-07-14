import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import {useNavigate} from 'react-router-dom';


import {Helmet} from 'react-helmet';

import './Contact.css'
import NavbarFunc from '../components/Navbar';

export default function Contact(){
    const navigate = useNavigate();

    //Language change 
    const [language, setLanguage] = React.useState(false); //English will be false

    const changeLang = () => {
        setLanguage(!language);
    }

    //For english error messages
    const [firstNameStatus, setFirstNameStatus] = useState(false);
    const [lastNameStatus, setLastNameStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [phoneStatus, setPhoneStatus] = useState(false);
    const [messageStatus, setMessageStatus] = useState(false);

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

    const messageChangeHandler = (value) => {
        if(value.length !== 0){
            setMessageStatus(true);
        }
        if (value.length <= 0){
            setMessageStatus(false);
        }
    };

    const validate = () =>{
        if((firstNameStatus === true) && (lastNameStatus === true) &&(emailStatus === true) &&(phoneStatus === true) &&(messageStatus === true)){
            navigate('/confirmationC');
        }
    };

    //For french error messages 
    const [prenonStatus, setPrenonStatus] = useState(false);
    const [nomFamilleStatus, setNomFamilleStatus] = useState(false);
    const [courrielStatus, setCourrielStatus] = useState(false);
    const [telephoneStatus, setTelephoneStatus] = useState(false);
    const [messageFrenchStatus, setMessageFrenchStatus] = useState(false);

    const prenonChangeHandler = (value) => {
        if(value.length !== 0){
            setPrenonStatus(true);
        }
        if (value.length <= 0){
            setPrenonStatus(false);
        }
    };

    const nomFamilleChangeHandler = (value) => {
        if(value.length !== 0){
            setNomFamilleStatus(true);
        }
        if (value.length <= 0){
            setNomFamilleStatus(false);
        }
    };

    const courrielChangeHandler = (value) => {
        if(value.length !== 0){
            setCourrielStatus(true);
        }
        if (value.length <= 0){
            setCourrielStatus(false);
        }
    };

    const telephoneChangeHandler = (value) => {
        if(value.length !== 0){
            setTelephoneStatus(true);
        }
        if (value.length <= 0){
            setTelephoneStatus(false);
        }
    };

    const messageFrenchChangeHandler = (value) => {
        if(value.length !== 0){
            setMessageFrenchStatus(true);
        }
        if (value.length <= 0){
            setMessageFrenchStatus(false);
        }
    };

    const validateFrench = () =>{
        if((prenonStatus === true) && (nomFamilleStatus === true) &&(courrielStatus === true) &&(telephoneStatus === true) &&(messageFrenchStatus === true)){
            navigate('/confirmationC');
        }
    };

    return(
        <div>
            <NavbarFunc doIt = {changeLang} />
             <div>
                <Helmet>
                    <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
                </Helmet>

                {language === false &&( //English version
                    <Container className="contactForm">
                        <Form>
                            <Row>
                                <Col>
                                    <h1 className="contactFormTitle">Contact Form</h1>
                                    <p className="contactFormSubText"> If you have any inquiries please send us your questions through the form below. We will get back to you ASAP!</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className="contactFormSubTitle">Inquiry Type</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div key={`inline-${'radio'}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Classes"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-1`}
                                            defaultChecked
                                        />
                                        <Form.Check
                                            inline
                                            label="Pricing"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Other"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-2`}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className="contactFormSubTitle">Your Information</h1>
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
                            <Row>
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
                                    <h1 className="regFormSubTitle">Your Inquiry</h1>
                                    <p className="regFormSubText"> Please enter your questions below and we will do our best to answer!</p>
                                </Col>
                            </Row>
                            <Row>
                                <InputGroup>
                                    <Form.Control as="textarea"  onChange={e => messageChangeHandler(e.target.value)} aria-label="With textarea" />
                                </InputGroup>
                                {messageStatus === false &&(
                                        <p className = "errorMsg">Please enter your inquiry!</p>
                                )}
                            </Row>
                            <div className = "btnDiv">
                                <Button onClick={validate} variant="dark" className="submitBtn"> Submit Form </Button>
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
                )}
                {language === true &&( //French version
                    <Container className="contactForm">
                        <Form>
                            <Row>
                                <Col>
                                    <h1 className="contactFormTitle">Formulaire de contact</h1>
                                    <p className="contactFormSubText"> Si vous avez des questions, veuillez nous envoyer vos questions via le formulaire ci-dessous. Nous vous répondrons dès que possible !</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className="contactFormSubTitle">Sujet de demande</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div key={`inline-${'radio'}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Cours"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-1`}
                                            defaultChecked
                                        />
                                        <Form.Check
                                            inline
                                            label="Prix"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Autre"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-${'radio'}-2`}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className="contactFormSubTitle">Votre information</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control onChange={e => prenonChangeHandler(e.target.value)} className="formInputBox" placeholder="Prénon" />
                                    {prenonStatus === false &&(
                                        <p className = "errorMsg">Entrez votre prénom s'il vous plait</p>
                                    )}
                                </Col>
                                <Col>
                                    <Form.Control onChange={e => nomFamilleChangeHandler(e.target.value)} className="formInputBox" placeholder="Nom de famille" />
                                    {nomFamilleStatus === false &&(
                                        <p className = "errorMsg">Entrez votre nom de famille s'il vous plait</p>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control onChange={e => courrielChangeHandler(e.target.value)} className="formInputBox" placeholder="Courriel" />
                                    {courrielStatus === false &&(
                                        <p className = "errorMsg">Entrez votre courriel s'il vous plait</p>
                                    )}
                                </Col>
                                <Col>
                                    <Form.Control onChange={e => telephoneChangeHandler(e.target.value)} className="formInputBox" placeholder="Numéro de téléphone" />
                                    {telephoneStatus === false &&(
                                        <p className = "errorMsg">Entrez votre numéro de téléphone s'il vous plait</p>
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h1 className="regFormSubTitle">Votre question</h1>
                                    <p className="regFormSubText"> Veuillez entrer vos questions ci-dessous et nous ferons de notre mieux pour y répondre !</p>
                                </Col>
                            </Row>
                            <Row>
                                <InputGroup>
                                    <Form.Control as="textarea" onChange={e => messageFrenchChangeHandler(e.target.value)} aria-label="With textarea" />
                                </InputGroup>
                                    {messageFrenchStatus === false &&(
                                        <p className = "errorMsg">Entrez votre question s'il vous plait</p>
                                    )}
                            </Row>
                            <div className = "btnDiv">
                                <Button onClick={validateFrench} variant="dark" className="submitBtn"> Envoyer </Button>
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
                )}
            </div>
        </div>
    );
}