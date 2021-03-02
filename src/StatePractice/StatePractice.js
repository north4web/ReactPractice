import React, { useState } from 'react'
import randomcolor from 'randomcolor'
import './Style3.css'

function Numbers() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    const handleClickInc = () => {
        setCount(prev => (prev + 1));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickDec = () => {
        setCount(prev => (prev - 1));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickDouble = () => {
        setCount(prev => (prev * 2));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickHalf = () => {
        setCount(prev => (prev / 2));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickSquare = () => {
        setCount(prev => (prev ** 2));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickSquareRoot = () => {
        setCount(prev => Math.sqrt(prev));
        setColor(randomcolor())
        document.getElementById('myInput').value = ''
    }

    const handleClickReset = () => {
        setCount(0);
        setColor('')
        document.getElementById('myInput').value = ''
    }

    const updateNumber = (e) => {
        setCount(parseFloat(e.target.value).toFixed(2))
    }

    return (

        <div id='numbers'>
            <br />
                Here I am learning about states and changing states
            <hr />
            {/* <h2 style={{ color: color }}><span id="sq">{count}</span></h2> */}

            <div id="myDisplay">
                <button className='dec' onClick={handleClickDec}>&lt;&lt; </button>
                <input id='myInput' style={{ color: color }} step='0.01' value={count} onChange={updateNumber} />
                <button className='inc' onClick={handleClickInc}>&gt;&gt;</button>
            </div>
            <br />
            <button id='reset' onClick={handleClickReset}>&nbsp;Reset</button>
            <br />

            <button className='oper-l' onClick={handleClickDouble}>x*2</button>
            <button className='oper' onClick={handleClickHalf}>x/2</button>

            <button className='oper' onClick={handleClickSquare}>x<sup>2</sup></button>
            <button className='oper-r' onClick={handleClickSquareRoot}>&radic;x</button>
            <br />
            <hr />

            <p>This is the code I refactured into Function component:

            </p>first part<br />
            <img src='Images/numbers-func-1.png' width='720' alt='' />
            <br />second part<br />
            <img src='Images/numbers-func-2.png' width='720' alt='' />

            <p>This is the code (just for one operation and basic) - using Class component:</p>first part<br />
            <img src='Images/numbers-1.png' width='720' alt='' />
            <br />second part<br />
            <img src='Images/numbers-2.png' width='720' alt='' />
        </div>
    )
}
export default Numbers