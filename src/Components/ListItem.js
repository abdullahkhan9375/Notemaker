import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

// import {Typography} from '@material-ui/core';
// import {Button, Typography} from '@material-ui/core'; 





const ListItem = (props) => {

    const func = props.handleDelete;
    return (
        <Grid container spacing = {2} style ={{marginTop: '0.001em', marginLeft: '2em'}} direction = "row" alignItems = "center">

            {/* Todo Text */}
            <Grid item xs = {10}>
                <Paper variant = "standard" style = {{color : 'white', padding : '0em 0.2em', overflow : 'hidden', backgroundColor : 'transparent'}} elevation = {1}><Typography id = "todo-text" variant = "h6"> {props.term}</Typography></Paper>
            </Grid>

            {/* Clear Button */}
            <Grid item xs = {2}>
                <ClearIcon  onClick = {() => func(props.term)} id = "clearIcon" color = "secondary"></ClearIcon>
            </Grid>

            
        </Grid>
    )
}

export default ListItem;
