import React from 'react'
import randomcolor from 'randomcolor'
import './Style3.css'



class State extends React.Component {
    state = {

        count: 0,
        color: '',
        // disabled: true
    }

    handleClickInc = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickDec = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickDouble = () => {
        this.setState(prevState => {
            return {
                count: prevState.count * 2,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickHalf = () => {
        this.setState(prevState => {
            return {
                count: prevState.count / 2,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickSquare = () => {
        this.setState(prevState => {
            return {
                count: prevState.count ** 2,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }


    handleClickSquareRoot = () => {
        this.setState(prevState => {
            let sqr = Math.sqrt(prevState.count)
            return {
                count: sqr,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickReset = () => {

        this.setState({ count: 0, color: '' })
        document.getElementById('myInput').value = ''
    }


    updateNumber = (e) => {
        this.setState({ count: parseFloat(e.target.value).toFixed(2) })
        // this.setState({disabled:false})
    }

    // this can be used instead of everywhere adding line for random color:
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.count !== this.state.count) {
    //         const newColor = randomcolor()
    //         this.setState({color: newColor})
    //     }
    // }

    render() {
        return (

            <div id='numbers'>
                <br />
                Here I am learning about states and changing states
                <hr />
                {/* <h2 style={{color: this.state.color}}><span id = "sq">{this.state.count}</span></h2> */}

                <div id="myDisplay">
                    <button className='dec' onClick={this.handleClickDec}>&lt;&lt; </button>
                    <input id='myInput' step='0.01' value={this.state.count} onChange={this.updateNumber} />

                    <button className='inc' disabled={this.state.disabled} onClick={this.handleClickInc}>&gt;&gt;</button>
                </div>
                <br />
                <button id='reset' onClick={this.handleClickReset}>&nbsp;Reset</button>
                <br />



                <button className='oper-l' onClick={this.handleClickDouble}>x*2</button>
                <button className='oper' onClick={this.handleClickHalf}>x/2</button>

                <button className='oper' onClick={this.handleClickSquare}>x<sup>2</sup></button>
                <button className='oper-r' onClick={this.handleClickSquareRoot}>&radic;x</button>
                <br />
                <hr />






                <p>This is the code (just for one operation and basic):</p>

first part<br />
                <img src='Images/numbers-1.png' width='720' alt='' />
                <br />
second part<br />
                <img src='Images/numbers-2.png' width='720' alt='' />

            </div>
        )
    }

}


export default State