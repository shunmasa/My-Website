
import React from 'react';
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import LoadingData from '../../public/assets/Loading.json'
import { useTheme } from "@material-ui/core/styles";
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
 
    animation: {
      maxWidth: "25em",
     
      marginTop: "2em",
      marginLeft:"12em",
      marginRight:"1em",
      [theme.breakpoints.down("md")]: {
  
        maxWidth:"20em",
        margin:0
        },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "35em",
        margin:0
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "25em",  
        marginLeft:"5em",
        margin:0
      
    }
  }
}))


const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData:LoadingData,
   rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
   }
 };
const Loading = () =>{
  const classes = useStyles();
  //other logic
     return(
      <Grid sm item className={classes.animation}>

      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
 
    </Grid>
 
    
     );
    
 }
 export default Loading