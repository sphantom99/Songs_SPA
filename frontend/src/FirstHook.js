import React, {useState, useEffect} from 'react'

function FirstHook() {
    const [num, setNum] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${num} times`;
    });
    return(
        <div><button onClick={() => setNum(num + 1)}></button>
            <p>Clicked {num} times!</p>
        </div>
    )
}

export default FirstHook