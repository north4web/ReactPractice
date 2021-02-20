import React from "react"
import Callout from "./Callout"
import { Link } from "react-router-dom";

function App() {
    return (
        <main className='center'>
            <Link class="nav-link center" to="/Children-Props">Go to Version using Props</Link>
            <h2>Here I use CHILDREN</h2>
            < hr />
            <h1>Welcome!</h1>

            <Callout >
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
            </Callout>

            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>

            <Callout >
                <img src="https://picsum.photos/id/102/4320/3240" width="50%" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>

            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

            <Callout >
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <input type="email" placeholder="Enter Email" />
                <button>Sign me up!</button>
            </Callout>


            < hr />

            <div style={{ textAlign: 'center' }}>

                <p>This is the code for this version (using children) - 2 files:</p>
  DisplayCallout2.js <br />
                <img src='Images/DisplayCallout2-js.png' width='720' />

                < br />Callout.js <br />
                <img src='Images/Callout-js.png' width='720' />

            </div>


        </main>
    )
}
export default App