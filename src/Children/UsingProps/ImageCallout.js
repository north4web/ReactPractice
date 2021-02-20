import React from "react"

function ImageCallout(props) {
    return (
        <div className="callout">
            <img src={props.img} width="50%" />
            <figcaption>{props.caption}</figcaption>
        </div>
    )
}
export default ImageCallout