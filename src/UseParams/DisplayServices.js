import React from "react"
import ServicesList from "./ServicesList"
import ServiceDetail from "./ServiceDetail"
import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            This is exercise for using "Switch" and "useParams"
            
            <Switch>
                {/* <Route exact path="/">
                    <Home />
                </Route> */}
                <Route exact path="/UseParams" >
                    <ServicesList />
                </Route>

                <Route path="/UseParams/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>

            < hr />
<div style={{ textAlign: 'center' }}>

<p>This is the code in 4 files:</p>

DisplayServices.js <br />
<img src='Images/DisplayServices-js.png' width='720' />

< br />

ServicesList.js <br />

<img src='Images/ServicesList-js.png' width='720' />


< br />ServicesDetail.js (in App.js had to remove exact before the path)<br />
<img src='Images/ServiceDetail-js.png' width='720' />

< br />ServicesData.js <br />

<img src='Images/ServiceData-js.png' width='720' />
</div>
            
        </div>
    )
}
export default App