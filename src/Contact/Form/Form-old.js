import React, {useState} from 'react'

function Form() {


    const [state, setState] = useState({});
    

    const updateState = (e) => {
        e.preventDefault();
        state[e.target.id] = e.target.value;
        setState({...state});
    }

    const getData = (e) => {
        e.preventDefault();
        console.log(state);
        localStorage.setItem("John1_Data", JSON.stringify(state));
        const myData = (localStorage.getItem("John1_Data"));
        console.log(myData);
        }

    
    return (

<div>

<form>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control" placeholder="Name" aria-label="name" aria-describedby="basic-addon1" id="name" onChange = {updateState}/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Surname</span>
  <input type="text" class="form-control" placeholder="Surname" aria-label="surname" aria-describedby="basic-addon1" id="surname" onChange = {updateState}/>
</div>

<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">Email address</span>
    <input type="email" class="form-control" placeholder="Email" id="email" aria-describedby="emailHelp" onChange = {updateState}/>
</div>


<div class="input-group mb-3">

<span class="input-group-text" id="basic-addon1">City</span>
<select name="city" id="city" onChange = {updateState} class="form-select" aria-label="Disabled select example">
  
  <option selected>-select your city-</option>
  <option value="Paris">Paris</option>
  <option value="Lahore">Lahore</option>
  <option value="Berlin">Berlin</option>
</select>

</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="gender" value="male" onChange = {updateState}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="gender" value="female" onChange = {updateState}/>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

<div class="input-group">
  <span class="input-group-text">Your message</span>
  <textarea class="form-control" aria-label="With textarea" id="text" onChange = {updateState}></textarea>
</div>

<br />


<button type="submit" class="btn btn-primary" onClick={getData}>Submit</button>
<p></p>
<p>The following data will be submited:</p>
<h3>{state.name} {state.surname} {state.email} {state.city} {state.gender} {state.text}</h3>

</form>
</div>


)}

export default Form
