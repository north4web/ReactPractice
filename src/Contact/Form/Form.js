import React, { Component } from "react"
import './Style-form.css'

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class Form extends Component {
    state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) :
      this.setState({ [name]: value })
  }


  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='firstName' value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /><br />
          <input type="text" name='lastName' value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /><br />
          <input type="text" name='age' value={this.state.age} placeholder="Age" onChange={this.handleChange} /><br />

          {/* Create radio buttons for gender here */}
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
                    </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
          <br />

          {/* Create select box for location here */}

          <label>Select one of our destinations</label>
          <br />
          <select
            name='destination'
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option>--select--</option>
            <option value="Israel">Israel</option>
            <option value='Paris'>Paris</option>
            <option value='Australia'>Australia</option>
            <option value='Croatia'>Croatia</option>
          </select>
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            /> Vegan?
                    </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            /> Kosher?
                    </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            /> Lactose Free?
                    </label>

          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>

        <p>Your dietary restrictions:</p>
       
        Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
        Kosher: {this.state.isKosher ? "Yes" : "No"}<br />
        Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}
       
<hr />

        <p>This is the code:</p>

first part<br/>
<img src='Images/form-1.png' width='720' alt=''/>
<br/>
second part<br/>
<img src='Images/form-2.png' width='720' alt=''/>
<br/>
third part<br/>
<img src='Images/form-3.png' width='720' alt=''/>


      </main>
    )
  }
}
export default Form
