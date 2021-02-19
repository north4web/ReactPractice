import React from "react"
import productsData from "./productsData"
import Header from '../Header/Header'
import Product from './Product'

function ProductDisplay() {

    const productsComponents = productsData.map(item => <Product key={item.id} product={item} />)

    // const productsComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

    return (
        <div>
            <Header />

            {productsComponents}

            {/* <Product
name="Sticker Set"
price="14.99"
description= "To prove to other devs you know a lot."

/> */}

            <p>This is the code in 3 files (data file is shortened):</p>
ProductDispay.js
            <br />
            <img src='Images/file-productDisplay-js.png' width='720' alt='' />

            <br />Product.js<br />

            <img src='Images/file-product-js.png' width='720' alt='' />

            <br />ProductsData.js<br />

            <img src='Images/file-productsData-js.png' width='720' alt='' />
        </div>
    )
}

export default ProductDisplay