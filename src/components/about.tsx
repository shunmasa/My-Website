import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden"

import { motion, useViewportScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
const Main = dynamic(()=>{return import('./Main')as any},{
  ssr: false
})
// import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles(theme => ({
  primaryContainer:{
    height:"100%",
      position: 'relative',
    background:"#fff",
   

 
  },

  galleryContainer:{
  
    marginBottom:"1em",
    // marginTop:"2.5rem",
    // boxShadow: `0 15px 20px -15px rgba(0, 0, 0, 0.3), 0 55px 50px -35px rgba(0, 0, 0, 0.3)`,
   
      width:"100%",
      marginTop:"10em",
      marginRight:0,
      marginLeft:0,
      [theme.breakpoints.down("lg")]: {
        width:"100%",
      
        marginTop:"2em"
        },
    [theme.breakpoints.down("md")]: {
      width:"100%",
      marginRight:0,
      marginLeft:0,
      },
      [theme.breakpoints.down("sm")]: {
        width:"100%",
      maxWidth:"768px",

        marginRight:0,
        marginLeft:0
        },
    [theme.breakpoints.down("xs")]: {
    margin:0,
    width:"100%",
    marginTop:0,
    height: "2000px",
  
    boxShadow:"none"
    }
  }
  
 

}));




export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // const [canScroll, setCanScroll] = React.useState(false);




  // React.useEffect(() => {
  //   if (canScroll === false) {
  //     document.querySelector("body").classNameList.add("no-scroll");
  //   } else {
  //     document.querySelector("body").classList.remove("no-scroll");
  //   }
  // }, [canScroll]);
  const classes = useStyles();
  const theme = useTheme();
   //  onAnimationStart={() => setCanScroll(true)}
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  return (

<motion.div initial='initial'
      animate='animate'
      exit='exit'
      >
 
 <Grid container className={classes.primaryContainer} direction="column">




  <Grid item container className={classes.galleryContainer}>
  <Hidden xsDown>
  <ScrollAnimation animateIn='fadeIn' delay={500}>
  
 <div className='model'>
              <span className='first' >
            
               ニュージーランド
              </span>
              <span >
                留学の魅力
              </span>
            </div>

      </ScrollAnimation>
      </Hidden>
 <Main/>

 </Grid>


    </Grid>
    </motion.div>
  );
}










