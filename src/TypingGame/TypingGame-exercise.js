






import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import './StylesTypingGame.css'







function TypingGame() {

    const [text, setText] = useState()
    const [timeRemaining, setTimeRemaining] = useState(4)
    const [isGameRunning, setIsGameRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)



    function handleChange(event) {
        setText(event.target.value)
    }

    //alternative:
    // function handleChange(e) {
    //     const {value} = e.target
    //     setText(value)
    // }

    function calculateWordCount(str) {
         const wordsArr = str.trim().split(' ')
         return wordsArr.filter(word => word !== '').length
    }

    //example: const result = words.filter(word => word.length > 6);


    useEffect(() => {
            if (timeRemaining > 0 && isGameRunning) {
                setTimeout(() => {
                setTimeRemaining(time => time - 1)
                }, 1000)
            } else if(timeRemaining === 0) {
                setIsGameRunning(false)
                setWordCount(calculateWordCount(text))
                setTimeRemaining(4)
            }
        }, [timeRemaining, isGameRunning])


    function startGame() {
       setIsGameRunning(true)

    }

    // if (timeRemaining === 0) {
    //     setWordCount(calculateWordCount(text))
        
    // }


    return (
        <div>
            <Header />



            <main id='typingCenter'>
                <h1>How fast do you type?</h1>


                <textarea

                    value={text}
                    onChange={handleChange} />



                <h4>Time Remaining: {timeRemaining}</h4>


                <button
                    // onClick={() => console.log(calculateWordCount(text))}
                    onClick={startGame}


                >Start</button>



                <h1>Word Count: {wordCount}</h1>



            </main>
        </div>
    )
}



export default TypingGame