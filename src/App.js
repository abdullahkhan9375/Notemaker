import React from 'react'
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import ListInput from './Components/ListInput';
import './App.css';
import Background from './Components/Background';
import Theme from './Components/Theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Time from './Components/Time';
import Quote from './Components/Quotes';



export default function App() {
    return (
        <ThemeProvider theme = {Theme}>
        <Box width = "100%">
        <Background style = {{overflow : 'hidden'}}></Background>
        <Grid container style = {{height : '100vh'}} justify = "center" direction = "column" alignItems = "center" xs = {12}>
            
            <Grid container direction = "column" justify= "center" alignItems = "center" xs = {12} spacing = {5} >
                <Time></Time>
        <div id = "main-box">
                <Grid item ><Typography id = "heading-App"> What's on your mind?</Typography> </Grid>

                   <Box id = "container-item"> <ListInput></ListInput> </Box>
                   </div>
                   <Quote></Quote>
                
            </Grid>
        </Grid>
        </Box>
        </ThemeProvider>
    )
}
