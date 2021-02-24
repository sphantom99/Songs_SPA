import React, {useState} from 'react'


function SecondHook() {
    const initialState = 0
    const [num,setNum] = useState(initialState)
    return (
        <div>
            Count: {num}
            <button onClick={() => setNum(prevState => prevState + 1)}>Inc</button>
            <button onClick={() => setNum(prevState => prevState - 1)}>Dec</button>
            <button onClick={() => setNum(initialState)}>Reset</button>
        </div>
    )
}

export default SecondHook
