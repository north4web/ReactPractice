import React from "react"
import InfoCallout from "./InfoCallout"
import ImageCallout from "./ImageCallout"
import EmailCallout from "./EmailCallout"
import { Link } from "react-router-dom";

function DisplayCallout1() {
    return (
        <main className='center'>
            <Link class="nav-link center" to="/Children">Go to Version using Children</Link>
            <h2>Here I use PROPS</h2>
            < hr />
            <h1>Welcome!</h1>

            <InfoCallout
                header="Don't miss out!"
                body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!"
            />
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>

            <ImageCallout
                img={"https://picsum.photos/id/102/4320/3240"}
                caption="Just look at those sparkling raspberries!"
            />
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

            <EmailCallout
                header="Give us your email. We definitely won't sell it to anyone."
                btnText="Sign me up!"
            />
            < hr />

            <div style={{ textAlign: 'center' }}>

                <p>This is the code for this version (using props) - 4 files:</p>
                DisplayCallout1.js <br />
                <img src='Images/DisplayCallout1-js.png' width='720' />

                < br />InfoCallout.js <br />
                <img src='Images/InfoCallout-js.png' width='720' />

                < br />ImageCallout.js<br />
                <img src='Images/ImageCallout-js.png' width='720' />

                < br />ImageCallout.js<br />
                <img src='Images/EmailCallout-js.png' width='720' />
                </div>

        </main>
    )
}
export default DisplayCallout1