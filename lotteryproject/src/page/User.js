import React ,{useContext} from "react";
import { Link } from "react-router-dom";

import './User.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function User(){
    return(
        <>
            <div className="screenContainer">

            <Container>
                <Row>
                    <Col sm>
                        <div className="userCard">
                            <h5>Manager</h5>
                            <Link to='/user/manager'><button className="userButton"><a className="userButtonA">Manager</a></button></Link>
                            <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.details</p>
                        </div>
                    </Col>
                    <Col sm>
                        <div className="userCard">
                            <h5>Player</h5>
                            <Link to='/user/buyer' ><button className="userButton"><a className="userButtonA">Buy Lottery</a></button></Link>
                            <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.details</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
};

export default User;