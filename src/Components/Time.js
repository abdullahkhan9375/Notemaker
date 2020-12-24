import {React, useState, useEffect} from 'react'



export default function Time() {
    

    const getTime = () => {
        const d = new Date();
        const min = d.getMinutes().toString();
        const hour = d.getHours().toString();
        const string = `${hour.length === 2 ? hour : '0' + hour} : ${min.length === 2 ? min : '0' + min}`
        return string;
    }

    const [time, setTime] = useState(getTime());
    useEffect(()=> {
        setTimeout(()=>{
            setTime(getTime)
        }, 1000);
    });

    return (
        <div id = "time">
            <p id = "time-text"> {time} </p>
        </div>
    )
}
