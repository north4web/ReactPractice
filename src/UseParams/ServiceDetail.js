import React from "react"
import { Link, useParams } from "react-router-dom"
import servicesData from "./ServicesData"

function ServiceDetail(props) {

    const { serviceId } = useParams();

    const thisService = servicesData.find(service => service._id === serviceId)

    return (
        <div style={{ backgroundColor: "white", margin: "0 -5px", padding: "20px" }}>
            <h1>Service Detail Page</h1>
            <nav style={{ textAlign: "left" }}>
                <Link to='/UseParams'>
                <i className="fas fa-angle-double-left fa-3x" style={{color:"navy"}}></i>
                </Link><br/><br/></nav>

            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <br />
            <br />
        </div>
    )
}

export default ServiceDetail

