import React, { useState, useEffect, useRef } from "react"
import Header from '../Header/Header'
import './StylesTypingGame.css'


function App() {


    const [time, setTime] = useState(10)
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(time)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [countStyle, setCountStyle] = useState("hidden")

    const textBoxRef = useRef(null)

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function handleChange2(e) {
        const tt = e.target.value
        setTimeRemaining(tt)
        setWordCount(0)
        setTime(tt)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function startGame() {
        setIsTimeRunning(true)
        // setTimeRemaining(time)
        setText("")
        setWordCount(0)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
        setCountStyle("hidden")
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
        setTimeRemaining(10)
        setCountStyle(null)

    }

    // https://www.google.com/search?q=Disable+button+in+react

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return (
        <div>
            <Header />
            <main id='typingCenter'>
                <h1>How fast do you type?</h1>
                <br />

         Challenge time:&nbsp;
         <input
                    id='ii'
                    value={timeRemaining}
                    type='number'
                    name='time'
                    onChange={handleChange2}
                />
        &nbsp;seconds

            <textarea
                    ref={textBoxRef}
                    onChange={handleChange}
                    value={text}
                    disabled={!isTimeRunning}
                    focus={isTimeRunning}
                />
                {/*<h4>Time remaining: {timeRemaining}</h4>}*/}


                <br />
                <button
                    id='bb'
                    onClick={startGame}
                    disabled={isTimeRunning}
                >
                    Start
            </button>
                <h1 className='middle' id={countStyle}> <span style={{color: "gray"}}>{wordCount}</span> words in <span style={{color: "gray"}}>{time} </span>seconds !</h1>


            </main>
        </div>
    )
}

export default App
