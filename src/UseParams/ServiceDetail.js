import React from "react"
import { Link, useParams } from "react-router-dom"
import servicesData from "./ServicesData"

function ServiceDetail(props) {

    const { serviceId } = useParams();

    const thisService = servicesData.find(service => service._id === serviceId)

    return (
        <div style={{ backgroundColor: "white" }}>
            <h1>Service Detail Page</h1>
            <nav style={{ textAlign: "center" }}><Link to='/UseParams'>Back</Link></nav>

            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetail