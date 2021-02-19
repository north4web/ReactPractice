/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import './Style2.css'

function Product(props) {

  return (
      <div className="container1">


            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} 
             - {props.product.description}</p>
        


          {/* <h3 className="item1">{props.id}</h3>
          <br />
          <h3 className="item1">Name: {props.name}</h3>
          <br />
          <h3 className="item1">Price: ${props.price}</h3>
          <br />
          <h3 className="item1">Description: {props.description}</h3>
          <br /> */}

      </div>
  )
}

export default Product


