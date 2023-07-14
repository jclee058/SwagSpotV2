import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import {Helmet} from 'react-helmet';
import Navbar from '../components/Navbar';
import './Faq.css';

export default function Faq(){
    return(
        <div>
            <Navbar />
            <Helmet>
                <style>{'body { background-color: rgb(71, 29, 112); }'}</style>
            </Helmet>

            <div className="faqTitle"> FAQ </div>

            <Container>
                <Accordion className="acoordionClass">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="questionTitle"> What should I bring to class? </div> </Accordion.Header>
                        <Accordion.Body className="answerBody">
                        Please bring indoor shoes (shoes that are clean) that you can dance in. We also suggest bringing a water bottle
                        to stay hydrated. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header> <div className="questionTitle"> What can I wear to class?</div></Accordion.Header>
                        <Accordion.Body className="answerBody">
                        We want our dancers to feel comfortable so we do not enforce a strict dress code.
                        When dressing for class, we ask dancers to be mindful that some classes may
                        have younger dancers involved and we want everyone to feel comfortbale.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> <div className="questionTitle">What is the difference between Drop-In and Term Classes?</div></Accordion.Header>
                        <Accordion.Body className="answerBody">
                        Drop-In classes are great for dancers who want to get a feel for a class without
                        a long term financial commitment. You can register for Drop-In classes up to a week in advance
                        and they are first come first serve. Term classes are better for those dancers who want to
                        make a weekly class commitment. We offer two term sessions from September-April and from May-December.
                        Throughout the term, dancers attend classes weekly, giving them a chance to really enhance their sills
                        and make new connections. Please visit the Pricing page for more information.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><div className="questionTitle">What does a typical class look like?</div></Accordion.Header>
                        <Accordion.Body className="answerBody">
                        Our classes are an hour long and tend to follow the same general schedule. Each class begins with 
                        a short warmup. After the warmup, the technical portion of the class begins which is decided
                        by the teacher. The activities included in the technical portion will depend on the style of
                        the class. At the end of the class we include a short cool-down before dancers go home or 
                        move to their next class.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><div className="questionTitle"> Where can I park?</div></Accordion.Header>
                        <Accordion.Body className="answerBody">
                        Street parking on University Private where we are located is free after 5:00pm. 
                        Please feel free to park on the street, or in the parking lot behind our facilities.
                        Note that our parking lot does not accomodate everyone and is quite full later on in
                        the evening.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><div className="questionTitle">Do I need prior dance experience to join a class?</div></Accordion.Header>
                        <Accordion.Body className="answerBody">
                        Prior dance experience is not necessary but is recommended for Intermediate and Advanced
                        classes. We welcome beginners and invite you to try out one of our beginners classes
                        to gage your experience!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
}