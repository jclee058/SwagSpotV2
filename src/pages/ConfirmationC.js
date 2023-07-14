import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

import './ConfirmationC.css';

export default function ConfirmationC(){
    return(
        <div> 
            <Navbar />
            <div className="mainDiv2">
                <div className="confirmMessage2">
                    <p> Thank you, we've recieved your message</p>
                    <p> and will get back to you</p>
                    <p> as soon as possible.</p>
                    <Button as={Link} to={"/home"} className="backHomeBtn2" variant="dark"> Back to Home </Button>
                </div>
            </div>
        </div>
    );
}