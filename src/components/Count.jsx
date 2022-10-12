import {useState} from "react";


export const Count = () => {
    const [count, setCount] = useState(1);

    const handleClick = () => {
        console.log(count + 1);
    }
    return <>
        <p>Count: {count}</p>
        <button type="button" onClick={handleClick}>click</button>
    </>
}