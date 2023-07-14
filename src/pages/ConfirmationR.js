import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import './ConfirmationR.css';

export default function ConfirmationR(){
    return(
        <div>
            <Navbar />
            <div className="mainDiv">
                <div className="confirmMessage">
                    <p> You have successfully</p>
                    <p> registered for classes.</p>
                    <p> We can't wait to dance with you!</p>
                    <Button as={Link} to={"/home"} className="backHomeBtn" variant="dark"> Back to Home </Button>
                </div>
            </div>
        </div>
    );
}