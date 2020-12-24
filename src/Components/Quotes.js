import {React, useEffect, useState} from 'react'
import axios from 'axios';
import './../App.css';

function getRandom(i){
    return Math.floor(Math.random() * i);
}



export default function Quotes() {
    const [quote, setQuote] = useState({});



    const getQuote = async () => {
    const res = await axios.get('https://type.fit/api/quotes')
    const quot = res.data[getRandom(res.data.length)]
    setQuote(quot);
}

    useEffect(()=> {
        getQuote();
    }, []);
    return (
        <div className = "quotes">
            <p className = "quotes-text"> "{quote.text}" </p>
            <p className = "quotes-text"> {quote.author}</p>
        </div>
    )
}
