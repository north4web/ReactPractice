import React from 'react'
import Header from '../Header/Header'
import randomcolor from 'randomcolor'
import './Style3.css'



class State extends React.Component {
    constructor() {
        super()
        this.state = {

            count: '',
            color:''
        }
        this.handleClickInc = this.handleClickInc.bind(this)
        this.handleClickDec = this.handleClickDec.bind(this)
        this.handleClickDouble = this.handleClickDouble.bind(this)
        this.handleClickHalf = this.handleClickHalf.bind(this)
        this.handleClickSquare = this.handleClickSquare.bind(this)
        this.handleClickSquareRoot = this.handleClickSquareRoot.bind(this)
        this.handleClickReset = this.handleClickReset.bind(this)

    }


    handleClickInc() {
        this.setState(prevState => {
            return {
                count: prevState.count+1,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickDec() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1,
                color: randomcolor()
            }
        })
        document.getElementById('myInput').value = ''
    }

    handleClickDouble() {
        this.setState(prevState => {
                return {
                    count: prevState.count * 2,
                    color: randomcolor()
                }
            })
            document.getElementById('myInput').value = ''
    }

    handleClickHalf() {
        this.setState(prevState => {
                return {
                    count: prevState.count / 2,
                    color: randomcolor()
                }
            })
            document.getElementById('myInput').value = ''
    }

    handleClickSquare() {
        this.setState(prevState => {
                return {
                    count: prevState.count ** 2,
                    color: randomcolor()
                }
            })
            document.getElementById('myInput').value = ''
    }


    handleClickSquareRoot() {
        this.setState(prevState => {
            let sqr = Math.sqrt(prevState.count)
                return {         
                    count: sqr,
                    color: randomcolor()
                }
            })
            document.getElementById('myInput').value = ''
    }

    handleClickReset() {

        this.setState({count: 0, color:''})
        document.getElementById('myInput').value = ''
    }


    updateNumber = (e) => {
        this.setState({count: e.target.value})
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
                <Header />
                <br />
                Here I am learning about states and changing states
                <hr />
                {/* <h2 style={{color: this.state.color}}><span id = "sq">{this.state.count}</span></h2> */}
                
                <div id="myDisplay">
                <button className='inc' onClick={this.handleClickDec}>&lt;&lt; </button>
                <input id='myInput' value={this.state.count} placeholder='Enter a number' onChange={this.updateNumber}/>
        
                <button className='inc' onClick={this.handleClickInc}>&gt;&gt;</button>
                </div>
                <br />
            <button id='reset' onClick={this.handleClickReset}>Reset</button>
                <br />
                
                
                
                <button className='oper' onClick={this.handleClickDouble}>x*2</button>         
                <button className='oper' onClick={this.handleClickHalf}>x/2</button>
               
                <button className='oper' onClick={this.handleClickSquare}>x<sup>2</sup></button>
                <button className='oper' onClick={this.handleClickSquareRoot}>&radic;x</button>
            <br />
                <hr />
              
                

               


                <p>This is the code (just for one operation and basic):</p>

<img src='Images/states-code.png' width='720' alt=''/>

            </div>
        )
    }

}


export default State