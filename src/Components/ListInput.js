import React from 'react'
import {Grid, Button} from '@material-ui/core';
import {useState, useRef, useEffect} from 'react';
// import {Box} from '@material-ui/core';
import ListItem from './ListItem';
import AddIcon from '@material-ui/icons/Add';
import BLUE from '@material-ui/core/colors/blue';


export default function ListInput() {
    const blue = BLUE[200];
    const [term, setTerm] = useState('');
    const [termList, setTermList] = useState([]);
    const inputCont = useRef("");
    const [exp, setExp] = useState([]);

    const onSubmitHandler = (e) =>{ 
        setTermList([...termList, term])
        setTerm("");
    }    

    
    function validator(termList){
        while (termList.length > 6){
            setTermList(termList.slice(1, termList.length - 1))
            break;
        }
    }
    function handleDelete(term){
        const newList = termList.filter(el => el !== term)
        setTermList(newList)
    }
    useEffect(()=> {
        let genListItems = termList.map((el, i) => {return el === "" ? null : (<ListItem handleDelete = {handleDelete} key = {i} term = {el} termId = {i}></ListItem>)});
        validator(termList)
        setExp(genListItems)
    }, [termList])

    return (

        // Form Begins.
        <form ref = {inputCont} onSubmit = {e => e.preventDefault()}>

        <Grid container alignItems = "center" justify = "center" spacing = {1} style = {{ width : '30vw', marginLeft : '2em'}}>

            {/* Text Input */}
            <Grid item xs = {10}>
                <input style = {{color : 'white'}}value = {term} onChange = {e => setTerm(e.target.value)} id = "textfield"/>
            </Grid>

            {/* Add Button */}
            <Grid item xs = {2}>
                <Button  style={{maxWidth: '7.5vw', maxHeight: '2vh', minWidth: '15px', minHeight: '30px'}} onClick = {e => onSubmitHandler(e)} type = "submit" color = "primary" size = "small" variant = "outlined"> <AddIcon color = {blue}></AddIcon> </Button> 
            </Grid>

        </Grid>

            {/* Generated List */}
        <Grid container xs = {12} justify = "center" style = {{margin : '2em 0'}}> 
        {exp}  </Grid>
        </form>
        
    )
}
