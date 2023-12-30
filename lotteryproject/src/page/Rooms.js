import React,{ useState} from "react";
import { useLocation } from 'react-router-dom';
import { ethers } from "ethers"; 
import { daiContractWithSigner } from "../utils/daicontract";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


function Rooms(){
    const location = useLocation();
    const [showError, setShowError] = useState(false);
    const [showStart, setShowStart] = useState(false);
    const queryParameters = new URLSearchParams(location.search);
    const myParam = queryParameters.get("myParam");
    
    // buy function
    async function Buy(){
        try{
            const amount = {value:ethers.utils.parseEther('11')}
            const value = await daiContractWithSigner.buy(myParam,amount );
            await value.wait();
            console.log("tran is done");
            console.log(value);
            handleStartClose();
        }catch(e){
            handleStartClose();
            handleErrorShow();
            console.log(e);
        }
    }
    // DailogBox
    function handleStartClose  () { setShowStart(false)};
    function handleStartShow () { setShowStart(true)};
    function startModal(){
        return(
            <Modal
                show={showStart}
                onHide={()=>handleStartClose()}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Buy Lottery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are u sure to buy a Lottery Ticket from roomno {myParam} !!
                </Modal.Body>
                <Modal.Footer>
                <button variant="secondary" className="userButton" onClick={()=>handleStartClose()}>
                    <a className="userButtonEnd" >Not Now!!</a>
                </button>
                <button variant="primary" className="userButton" onClick={()=>Buy()}><a className="userButtonStart">Yes!! Buy...</a></button>
                </Modal.Footer>
            </Modal>
        )
    }

    // error
        function handleErrorClose () { setShowError(false)};
        function handleErrorShow () { setShowError(true)};
        function errorModal(error){
        return( <Modal show={showError} onHide={()=>handleErrorClose()} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error}</Modal.Body>
                <Modal.Footer>
                <button className="userButton" variant="secondary" onClick={()=>handleErrorClose()}>
                    <a className="userButtonA">Okay!!! Close</a>
                </button>
                
                </Modal.Footer>
            </Modal>)
        }

    return(
        <>
            <div className="screenContainer">
                <Container>
                    <Row>
                        <Col sm>
                            <div className="userCard">
                                <h5>Buy</h5>
                                <button className="userButton" onClick={()=>handleStartShow()}><a className="userButtonStart">Buy</a></button> 
                                <p>About Us --- Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil  </p>
                            </div>
                        </Col>                        
                    </Row>
                </Container>
                {startModal()}
                {errorModal("something rough")}
            </div>
        </>
    )
}

export default Rooms;
