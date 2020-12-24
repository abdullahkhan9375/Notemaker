import {React, useState, useEffect} from 'react';
import axios from 'axios';
import './../App.css';

const topics = ['Nature', 'City', 'Space', 'Farm', 'Forest']

function getRandom(i){
    return (Math.floor(Math.random() * i))
}

const KEY = '9xXp8e1u3zblwsoyuBjZzf4qm0AGPiVFcz3X7zaDYss';



export default function Background() {


    const [img, setImg] = useState('');


    const getPhoto = async() => {
    const num = getRandom(5);
    const num2 = getRandom(10);
    console.log('clicked')
    const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${KEY}`, {
        params : {
            query : topics[num],
            orientation : 'landscape'
            }
    
        })
    setImg(res.data.results[num2].urls.full)
    
    }   
    useEffect(()=>{
        getPhoto();
    }, [])
    return (
        <div>
            <img alt = 'unsplash' src = {img}></img>
        </div>
    )
}
