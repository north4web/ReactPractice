import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import servicesData from "./ServicesData"

function ServiceDetail(props) {

    const { serviceId } = useParams();
    const history = useHistory()

    const thisService = servicesData.find(service => service._id === serviceId)

    function handleClick() {
        // console.log("Submitting...")
        // setTimeout(() => {
        //     history.push("/useParams")
        // }, 2000)
        history.goBack()
    }

    return (
        <div style={{ backgroundColor: "white", margin: "0 -5px", padding: "20px" }}>
            <h1>Service Detail Page</h1>
            
            
            {/* <nav style={{ textAlign: "left" }}>
                <Link to='/UseParams'>
                <i className="fas fa-angle-double-left fa-3x" style={{color:"navy"}}></i>
                </Link><br/><br/></nav> */}



            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <br />
            
            <br />
            <h1><button onClick={handleClick} style={{borderRadius:"15px", backgroundColor:'whitesmoke', color:"navy"}}><i className="fas fa-angle-double-left fa-1x" style={{color:"navy"}}>  Go back to all services</i></button>
            </h1>
        </div>
    )
}

export default ServiceDetail

