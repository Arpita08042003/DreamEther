import React from "react";
import './About.css'

function About(){

    const about=[
        [
            "About DreamEther",
            "Welcome to DreamEther, the ultimate destination for decentralized lotteries on the blockchain! We're excited to bring you an innovative and fair lottery system that leverages the power of Web3 technology."
        ],
        [
            "Our Mission",
            "At DreamEther, our mission is to provide a transparent and secure platform for hosting and participating in lotteries. We believe in the potential of blockchain to revolutionize traditional systems, and we're here to make lottery games more accessible, trustworthy, and fun for everyone."
        ],
        [
            "How It Works",
            <p><br/><h6>Hosting Lotteries</h6>Anyone can start their own lottery room on DreamEther. Each user is allowed to initiate one lottery at a time, ensuring a fair and equal opportunity for all. Our smart contract technology ensures that the lottery process is transparent and tamper-proof.<br/><br/><h6>Participating in Lotteries</h6> Feel the thrill of the game by participating in active lottery rooms hosted by others. With multiple lotteries happening simultaneously, you can explore various opportunities to try your luck and win exciting prizes.</p>
        ],
        [
            "Security and Transparency",
            "Your security is our priority. We utilize blockchain technology to guarantee the fairness and transparency of every lottery on our platform. Our smart contracts are designed to be secure, auditable, and resistant to manipulation, ensuring a trustless environment for all users."
        ],
        [
            "Community-Driven Innovation",
            "We value the input of our community. Your feedback and suggestions play a crucial role in shaping the future of DreamEher. Join our community forums, share your ideas, and be part of the decentralized lottery revolution."
        ],
        [
            "Contact Us",
            <p>Have questions or need assistance? Don't hesitate to reach out to our support team at [.......@com]. We're here to help!<br/><br/> Thank you for choosing DreamEther for your decentralized lottery experience. Let the games begin, and may the odds be ever in your favor!<br/><br/> DreamEther Team !!</p>
        ]
    ]


    return(
        <>
            <div className="screenContainer">

            <div class="badge">
                <div class="text">’Hallo!</div>
            </div>


                {about.map((element,index)=>{
                    return(<>
                        <div className="dropItem">
                        <h4 className="dropItemname">{element[0]}</h4>
                        <p className="dropItemValue">{element[1]}</p>
                        </div></>)
                })}                
            </div>
        </>
    );
}

export default About;