import React from "react";

function Errors(){
    const data =[
        [
            "Did Not Have metamask Wallet",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tincidunt ipsum, quis pulvinar odio. Nam ut lacus et ipsum feugiat aliquet. Pellentesque ullamcorper nisl id dui pharetra faucibus. Vivamus non sapien eu purus gravida sollicitudin sit amet quis velit. Cras sollicitudin suscipit leo vel fermentum. Quisque luctus vel lacus at mattis."
        ],
        [
            "Did Not Connected To Metamask",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tincidunt ipsum, quis pulvinar odio. Nam ut lacus et ipsum feugiat aliquet. Pellentesque ullamcorper nisl id dui pharetra faucibus. Vivamus non sapien eu purus gravida sollicitudin sit amet quis velit. Cras sollicitudin suscipit leo vel fermentum. Quisque luctus vel lacus at mattis. Quisque sit amet mi eu arcu laoreet varius ut pellentesque nunc."
        ],
        [
            "May Be Network Is Busy",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tincidunt ipsum, quis pulvinar odio. Nam ut lacus et ipsum feugiat aliquet. Pellentesque ullamcorper nisl id dui pharetra faucibus. Vivamus non sapien eu purus gravida sollicitudin sit amet quis velit. Cras sollicitudin suscipit leo vel fermentum. Quisque luctus vel lacus at mattis. Quisque sit amet mi eu arcu laoreet varius ut pellentesque nunc. Pellentesque rhoncus nisi felis, vitae fermentum massa porttitor eget. Nulla scelerisque facilisis libero. "
        ],
        [
            "May Be You Already Started Lottery Game,(check status of manager, sometimes it take time to update)",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tincidunt ipsum, quis pulvinar odio. Nam ut lacus et ipsum feugiat aliquet. Pellentesque ullamcorper nisl id dui pharetra faucibus. Vivamus non sapien eu purus gravida sollicitudin sit amet quis velit. Cras sollicitudin suscipit leo vel fermentum. Quisque luctus vel lacus at mattis. Quisque sit amet mi eu arcu laoreet varius ut pellentesque nunc. Pellentesque rhoncus nisi felis, vitae fermentum massa porttitor eget. Nulla scelerisque facilisis libero. "
        ],
        [
            "May Be You Already Buy Lottery Ticket,(check status of player, sometimes it take time to update)",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu tincidunt ipsum, quis pulvinar odio. Nam ut lacus et ipsum feugiat aliquet. Pellentesque ullamcorper nisl id dui pharetra faucibus. Vivamus non sapien eu purus gravida sollicitudin sit amet quis velit. Cras sollicitudin suscipit leo vel fermentum. Quisque luctus vel lacus at mattis. Quisque sit amet mi eu arcu laoreet varius ut pellentesque nunc. Pellentesque rhoncus nisi felis, vitae fermentum massa porttitor eget. Nulla scelerisque facilisis libero."
        ]
    ]
    return(
        <>
            <div className="screenContainer">
                <h2>Error Page: Oops, Something Went Wrong!<br/><br/></h2>
                {
                    data.map((element,index)=>{
                        return(
                            <>
                                <div className="dropItem">
                                <h5 className="dropItemname">{element[0]}</h5>
                                <p className="dropItemValue">{element[1]}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Errors;