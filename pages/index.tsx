import ScrollNavigation from 'react-single-page-navigation';
import ReactGA from "react-ga";
import Head from "next/head";
import Typewriter from 'typewriter-effect';
import { useRouter } from "next/router";
import { motion, AnimateSharedLayout,useViewportScroll, useTransform  } from "framer-motion";
import React,{useState,useEffect,useCallback, useRef} from 'react';
import HeadLine from "../src/components/HeadLine"
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Carousel from '../src/components/Carousel'
import Card from '../src/components/Card'
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useScrollTrigger, Button, Paper } from '@material-ui/core';
import StepperFnc from '../src/components/StepperFnc'
import Lottie from "react-lottie"
import Boarding from '../public/assets/boarding.json'
import Click from '../public/assets/click.json'
import CheckBord from '../public/assets/checkboard.json'
import Phone from '../public/assets/phone.json'
import Welcome from '../public/assets/welcome.json'
import CallAnimation from '../src/components/CallAnimation'
import {Check} from '../src/components/Check'
import Gallery from '../src/components/Gallery'
import Footer from '../src/components/Footer'
import GET_POSTS from '../src/graphql/query/posts';
import Link from 'next/link'
import moment from 'moment'
import useSticky from "../src/components/UseStickey"
// import ListPost from '../src/components/ListPost'

import Loading from '../src/components/Loading'

import { withApollo } from '../lib/withApolloData'
import { useQuery } from '@apollo/react-hooks';
import About from '../src/components/about'
import Hidden from "@material-ui/core/Hidden";

import GET_NOTICES from '../src/graphql/query/notices'
import ButtonArrow from "../src/components/ButtonArrow";
import ScrollAnimation from '../node_modules/react-animate-on-scroll';
import Router from 'next/router';
import CookieConsent from "react-cookie-consent";
import {$,jQuery} from 'jquery';
import dynamic from "next/dynamic";
import {ScrollMagic} from 'scrollmagic-with-ssr';


// const ScrollMagic = dynamic(()=>{return import('scrollmagic')as any},{
//   ssr: false
// })

// import MainPhoto from '../src/components/MainPhoto'
function ElevationScroll(props:any) {

  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     marginTop:'7em',
  
    },   
    animation: {
      maxWidth: "25em",
      minWidth: "16em",
      marginTop: "2em",
      marginBottom:"5em",
      [theme.breakpoints.down("xl")]: {
        maxWidth: "35em",
        minWidth: "20em",
        marginLeft:"100px"
      
      },
      [theme.breakpoints.down("lg")]: {
        maxWidth: "25em",
        minWidth: "16em",
        marginTop: "7em",
        marginBottom:"5em",
        marginLeft:"10px"
      },
      [theme.breakpoints.down("md")]: {
        maxWidth: "22em",
        minWidth: "15em",
        marginTop: "2em",
        marginBottom:"3em",
        marginRight:"100px"
      },
      [theme.breakpoints.down("sm")]: {
       minWidth:0,
       maxWidth: "27em",
       marginRight:0
      },
      [theme.breakpoints.down("xs")]: {
        margin:0,
        marginLeft:"20px",
        maxWidth: "22em",
        marginRight:0
      }
    },
   mainContainer:{
     width:"100%"
   },
   supportContainer:{
    width:"100%",
    height:"45em",
    position:"relative",
    [theme.breakpoints.down("xl")]: {
      marginLeft:0,
      marginRight:0,
      width:"100%",
      height:"45em",
      marginTop:"10em"
 
      },
    [theme.breakpoints.down("lg")]: {
      marginTop:0,
      marginLeft:0,
      marginRight:0,
      width:"100%",
      height:"25em",
 
      },
    [theme.breakpoints.down("md")]: {
      marginTop:"3em",
      height:"45em",
      marginLeft:0,
      marginBottom:0,
      marginRight:0,
      paddingRight:0,

      width:"100%", 
      },
      [theme.breakpoints.down("sm")]: {
        height:"35em" ,
        maxWidth:"748px",
        marginLeft:"10px",
        width:"100%",
        marginTop:0,
        marginBottom:0,
        },
    [theme.breakpoints.down("xs")]: {
    height:"30em",

    marginTop:0,
    marginLeft:0,
    }
  },
    secondContainer:{
      height:"20em",
      [theme.breakpoints.down("md")]: {
        marginTop:"3em",
        height:"30em" ,
        width:"100%",
        maxWidth:"1280px"
        },
        [theme.breakpoints.down("sm")]: {
          height:"40em" ,
          width:"100%",
      maxWidth:"768px",
          },
      [theme.breakpoints.down("xs")]: {
       marginTop:"4em",
      height:"45em" 
      }
    },
  
    thirdContainer:{
      marginTop:"4em",
      height:"20em",
      width:"20em",
      [theme.breakpoints.down("md")]: {
        height:"25em",
        width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"26em",
          width:"100%",
          maxWidth:"768px"
          },
      [theme.breakpoints.down("xs")]: {
      height:"28em",
      width:"100%",
      }
    },  
    rowContainer: {
      zIndex:100,
    
      marginTop:"2.5em",
      paddingTop:"2em",
      paddingBottom:"10em",
      backgroundColor:"#f7f8fc",
      marginLeft:"250px",
      paddingRight: 0,
      width:"1415px",
      [theme.breakpoints.down("lg")]: {
      
        marginLeft: "170px",
        paddingRight: 0,
        width:"1110px"
         },
      [theme.breakpoints.down("md")]: {
    
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft:"150px",
        marginRight:"150px",
    
        width:"900px",
        marign:0,
         },
      [theme.breakpoints.down("sm")]: {
        width:"100%",
        maxWidth:"768px",
        marginLeft:0,
      padding:0,
     marign:0,
      },
      
      [theme.breakpoints.down("xs")]: {
        padding:0,   

        marginTop:"150px",
        marginRight:0,

         }
    },
    bell:{
    width:"50px",
    height:"50px",
    paddingRight:"12px",
    verticalAlign: "middle",
    [theme.breakpoints.down("xl")]: {
     width:"60px",
     height:"60px",
     marginTop:"-10px"
       },
    [theme.breakpoints.down("lg")]: {
      width:"55px",
      height:"55px",
      marginTop:0
       },
    [theme.breakpoints.down("md")]: {
      width:"50px",
      height:"50px",

    },
    [theme.breakpoints.down("xs")]: {
      width:"45px",
      height:"40px",
    
       }
    },
 curve:{
  position: "absolute",
  width: "100%",
  bottom: "-2px",

  // marginBottom:"10px",
  fill: "#f1f1f1",   
  [theme.breakpoints.down("md")]: {
  
     },
     
     [theme.breakpoints.down("xs")]: {
      position:"static",
      width: "100%",
      
     
        }
   },

 
 curve1:{
  position: "absolute",
  width: "100%",
  bottom: "-2px",
    // marginBottom:"10px",
  fill: "#f1f1f1",
  [theme.breakpoints.down("md")]: {
   
    },
  [theme.breakpoints.down("xs")]: {
    bottom: "-2px",
    display:"none"
  }

 },
  
 curve2:{

  width: "100%",
  bottom: "-2px",
    // marginBottom:"10px",
  fill: "#f1f1f1",
  [theme.breakpoints.down("md")]: {
   width:"100%"
    },
  [theme.breakpoints.down("xs")]: {
    bottom: "2px",
    width:"100%"
  }

 },
  boxContainer:{
    backgroundColor:"#fff",
    padding:"2em",

    marginRight:"1em",
 marginBottom:"1rem",
    height:"100%",
    maxHeight:"60rem",
    borderRadius: "12px",
    // boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom:".5em",
      margin:0
      },
      [theme.breakpoints.down("sm")]: {
      
        margin:0
        },
    [theme.breakpoints.down("xs")]: {
    margin:0,
    marginTop:"-15px",
    boxShadow:"none"
    }
  },
  boxContainer2:{
    backgroundColor:"#fff",
    padding:"2em",
    height:"100%",
    maxHeight:"65rem",
    borderRadius: "12px",

    // boxShadow:`-7px 7px 22px -6px rgba(0,0,0,0.76)`,
    [theme.breakpoints.down("md")]: {
      marginBottom:".5em",
      
      },
    [theme.breakpoints.down("xs")]: {
      margin:0,
      boxShadow:"none"
    }
  },
    checkContainer:{
   
        marginTop:"9rem",
        height:"45em",
          width:"100%", 
          maxWidth:"1550px",
          marginLeft:"270px",
    
       
        [theme.breakpoints.down("lg")]: {
          height:"45em",
          maxWidth:"800px",
          width:"100%", 
          marginLeft:"130px"
          },
        [theme.breakpoints.down("md")]: {
          height:"45em",
          maxWidth:"1200px", 
          marginLeft:"80px",
          width:"70%", 
        
          },
          [theme.breakpoints.down("sm")]: {
            height:"41em",
            maxWidth:"768px",
            width:"100%", 
            marginLeft:0
            },
        [theme.breakpoints.down("xs")]: {
         marginLeft:0,
         marginRight:0,
         marginBottom:"3rem",
         width:"100%",
         height:"36em",
         
        }
       
    },
    titleText:{
      fontSize:"1.7rem",
      marginLeft:"0.8em",
      marginBottom:0,
      height:0,
      [theme.breakpoints.down("sm")]: {
        margin:0,
        fontSize:"1.2rem",
   
      },
      [theme.breakpoints.down("xs")]: {
        marginLeft:"5px",
        width:"100%",
        marginTop:"30px",
        marginRight:0,
        marginBottom:"1.8rem"


      }
    },
 

    checkboard:{

      marginRight:0,
      marginLeft:"-2em",

      [theme.breakpoints.down("lg")]: {
        height:"15em",
        width:"15em",
        marginRight:"8em",
        marginLeft:0,
      },
  
 
    [theme.breakpoints.down("md")]: {
      height:"10em",
      width:"10em",
      marginRight:"8em",
      marginLeft:"-30px",
    },
    [theme.breakpoints.down("sm")]: {
     
      marginRight:"8em",
      marginLeft:0,
    }

  },
  
    btn: {
// -webkit-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
// -moz-box-shadow: -4px 6px 5px 0px rgba(0,0,0,0.75);
      // boxShadow: "-2px 3px 1px 2px",
      marginTop:"1em",
      // marginLeft:"200px",
      border: "2px solid #2930c2",
      borderWidth: 3,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "1.5rem",
      height: 80,
      padding: 8,
      textDecoration: "none",
      // border: 'none',
      width: 250,
    // borderRadius: 6,
    // boxShadow: '0 3px 5px 2px #2594f5',
    cursor: 'pointer',
    color: '#2930c2',
    backgroundSize: '200%',
    backgroundColor:"#fff",
    transition: 'all 0.3s ease-out',
    '&:hover': {
      backgroundPosition: 'right',
      background: "#2930c2",
      color: '#fff',
    },
   
      [theme.breakpoints.down("lg")]: {
        marginLeft: 0
      },
       [theme.breakpoints.down("md")]: {
        marginLeft: "-70px",
        width: 230,
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        width: 230,
      }
    },
    btn1: {
      backgroundImage: 'linear-gradient(to left,#03478a, #3498db, #1e8bf7 )'
     },
    desContainer:{
    height: "25rem",
    marginTop: "1em",

    marginLeft: "9em",
   　width:"80%",
   [theme.breakpoints.down("xl")]: {
    height:"35rem",
    marginLeft: 0,
    marginRight:0,
    width:"100%",
    },
   [theme.breakpoints.down("lg")]: {
    height:"35rem",
    marginTop: "1em",
    marginLeft: 0,
    width:"100%",
    },
      [theme.breakpoints.down("md")]: {
        height:"25rem",
        marginTop: "1em",
        marginRight: 0,
        marginLeft: 0,
        width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"25rem",
          marginLeft: 0,
   
         
          },
      [theme.breakpoints.down("xs")]: {
      height:"48rem",
      width:"100%",
    

      margin:0,
      marginTop:"190px",
      marginLeft:0,
      }

      }
    ,
   textContainer: {
     maxWidth:"800px",
      marginRight:"3em",
      maxHeight:"25em", 
      [theme.breakpoints.down("xl")]: {
        maxHeight:"35em",
        marginRight:"1em",
        marginLeft:"270px",
        maxWidth:"800px",
        width:"100%",
        },
      [theme.breakpoints.down("lg")]: {
        maxHeight:"35em",
        minWidth:"700px",
        marginRight:0,
        marginLeft:"120px",
        width:"100%",
        },
      [theme.breakpoints.down("md")]: {
        maxHeight:"35em",
        minWidth:"8em",
        marginLeft:"100px",
        marginRight:0,
        width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          maxHeight:"35em",
          minWidth: "29em",
          marginRight:0,
          marginTop:"30px",
          marginLeft:"20px",
          width:"100%",
          },
      [theme.breakpoints.down("xs")]: {

        maxHeight:"40em",
        minWidth: "200px",
       
        marginLeft:"15px",
        width:"100%",
        marginTop:"40px"
      }
    },

 
    bannerContainer:{
      height:"500px",
      [theme.breakpoints.down("xs")]: {
       height:"6rem"
        
        }
    },
    bannerContainer2:{
      height:"6.5rem",
      [theme.breakpoints.down("xs")]: {
       height:"3.5rem"
        
        }
    },
     primaryContainer:{
      height:"100%",
        position: 'relative',
      maxHeight:"157rem",
   

      [theme.breakpoints.down("xl")]: {
        height:"100%",
        maxHeight:"190rem",

        width:"100%",
        },
      [theme.breakpoints.down("lg")]: {
        height:"100%",
        maxHeight:"220rem",

        width:"100%",
        },
      [theme.breakpoints.down("md")]: {
        height:"100%",
        maxHeight:"220rem",
        paddingBottom:"10px",
        width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"100%",
          maxHeight:"240rem",
          paddingBottom:"100px",
       
        maxWidth:"768px",
          width:"100%",
          },
      [theme.breakpoints.down("xs")]: {
      maxHeight:"237rem",
      height:"100%",

      width:"100%",
 
        marginTop:0,
       
        paddingTop:0
      
      }
    },

    flowContainer:{
      // position:"relative",
      // width:"100%",

      height:"20em",
      width:"60em",
      marginLeft:"3em",
      marginBottom:"5em",
      [theme.breakpoints.down("xl")]: {
        marginTop:"4em",
        marginRight:0,
        marginLeft:0,

        width:"100%", 
        marginBottom:"10em",
        },
        [theme.breakpoints.down("lg")]: {
          marginTop:"18em",
          height:"45em",
          width:"100%", 
          marginRight:0,
          marginLeft:0,
          marginBottom:0,
          },
      [theme.breakpoints.down("md")]: {
        height:"30em",
        width:"100%", 
        maxWidth:"1200px",
        marginLeft:0,
        marginRight:0,
        marginTop:0,
        },
        [theme.breakpoints.down("sm")]: {
          height:"35em",
          marginTop:"8em",
          width:"100%", 
      

          marginLeft:0,
          marginRight:0,
          },
      [theme.breakpoints.down("xs")]: {
        height:"60em",
        marginTop:"100px",
        marginBottom:0,
        width:"100%",
  
      
      
        
        }
     
    },
    flow:{
 
      width:"100%",  
      marginLeft:"20px",
      marginTop:"70px",
      maxWidth:"950px",
      marginRight:"120px",
     
        [theme.breakpoints.down("lg")]: {
          marginLeft:"20px",
          marginRight:"50px",
          width:"100%",
          maxWidth:"770px"
          },
      [theme.breakpoints.down("md")]: {
        marginLeft:"30px",
      marginRight:"70px",
        width:"100%", 
        maxWidth:"650px"
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft:0,
          maxWidth:"530px",
          marginRight:0
          },
      [theme.breakpoints.down("xs")]: {
        width:"100%",
      
        margin:0
        
        }
    },
  
    imageContainer:{
     
       marginTop:"2em",
       marginLeft:"260px",
     
       width:"400px", 
     
       [theme.breakpoints.down("lg")]: {
        marginLeft:"110px",
     marginTop:"60px",
         width:"330px", 
         },
       [theme.breakpoints.down("md")]: {
       marginLeft:"100px",
        marginTop:"60px",
        width:"300px", 
        },
        [theme.breakpoints.down("sm")]: {
          marginLeft:0,
        width:"200px",
        height:"200px",
        marginTop:"100px"

  
           },
       [theme.breakpoints.down("xs")]: {
        marginLeft:0,
        width:"280px",
        height:"280px",
        marginTop:"30px",
        marginBottom:"30px"
        }
      
    },
    svg:{


// backgroundColor: "#00b7ff",
//backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`
backgroundColor: '#f7f8fc',
//backgroundColor: "#D0D0D0",
//backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%234066cd' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%233042a9' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%233558c9' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%233b64a5' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%233151c1' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%2339769c' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23354fbb' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%233c8995' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%232c43b2' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2347938b' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23293ba7' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23478973' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
backgroundAttachment: "fixed",
backgroundSize: "cover",
position:"relative",
'&::before':{
  content:"",
  background:"#f1f1f1",
  height:"50%",
  left: 0,
  position: 'absolute',
  top: 0,
  zIndex: "1"
},

},
underline:{
    padding:0, 
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 0.3em",
    backgroundPosition: "0 88%",
    transition: "background-size 0.25s ease-in",
    '&:hover':{
      backgroundSize: "100% 88%"
    }
  },
  gallery:{
    backgroundColor:"#f1f1f1",
    position:"relative",
    marginRight:'250px',
    marginLeft:'250px',
    marginTop:"100px",
 
      [theme.breakpoints.down("lg")]: {
        marginRight:0,
        marginLeft:'60px',
   
        },
  
        [theme.breakpoints.down("sm")]: {
          marginRight:0,
          marginLeft:'60px',
          width:"85%"
     
          },
    [theme.breakpoints.down("xs")]: {
      marginTop:"30px",
      marginRight:0,
      marginLeft:0,
      width:"100%"
      }

  }
  })
); 


interface Post {
  username: string;
  description: string;
  _id: string;
}

interface Data {
  posts: [Post];
}

interface PostProps {
  loading: boolean;
  data: Data;
  error: string;
}
interface Title {
  title: string;
  color:string;
  index:string;
}

const Home = () => {
 

const {data,error,loading} = useQuery(GET_POSTS)
console.log('pdata',data)
const {data:dataN,loading:loadingN,error:errorN} = useQuery(GET_NOTICES)  
  let message = 'Posts';

  if (loadingN) message = 'Loading...';
  if (errorN) message = `Error! ${errorN}`;
  if (dataN && dataN.notices.length <= 0) message = 'No Posts';

  const classes = useStyles();
  const router = useRouter();

useEffect(()=> {
  if(loadingN){
    router.reload()
  }
  },[]) // eslint-disable-line

  
//  console.log('pdata',data)
  const theme = useTheme();
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultHeaderClassName = "calsses.main_h";
  const [headerClassName, setHeaderClassName] = useState(
    defaultHeaderClassName
  );

//const [visibleSection, setVisibleSection] = useState('');




const [isOpened, setIsOpened] = useState(false);
const [status, setStatus] = useState('close');


const [selected, setSelected] = useState("");

//const [isSticky, setSticky] = useState(false)
    useEffect(() => {
    setHeaderClassName(
      `${isOpened ? "open-nav" : ""}`
    );

   
  }, [isOpened]);

  const Op = {
    loop: true,
    autoplay: true,
    animationData:Phone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
 
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData:Welcome,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const Options = {
  loop: true,
  autoplay: true,
  animationData:Boarding,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const CheckOptions = {
  loop: true,
  autoplay: true,
  animationData:CheckBord,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const ClickOptions = {
  loop: true,
  autoplay: true,
  animationData:Click,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};




const ReadLimit = ({ children, maxCharacter = 200 }) => {
  const text = children;
  const [isShrinked, setIsShrinked] = useState(true);
  // const resultString = text.slice(0, maxCharacter);
  const resultString = isShrinked ? text.slice(0, maxCharacter) : text;
  function toggleIsShrinked() {
    // e.stopPropagation();
    setIsShrinked(!isShrinked);
  }

  return (

    <Typography style={{fontSize:"1.1rem"}}>
          {resultString}
  
          <Button style={{marginLeft:"0.5rem"}}variant="outlined"　onClick={toggleIsShrinked} color="primary">
            {isShrinked ? "もっと読む" : "縮める"}
            </Button>
      
        
   </Typography>
    

  );
};

useEffect(() => {
 
  if (process.browser) {
    // (function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }// @ts-ignore
    s();
// @ts-ignore
    for (var r = document.querySelectorAll(".hover_over"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }



  }
 
}, []);





const screens:Title[] = [
  {
    index:"section1",
    title: "EXCELNZ",
    color: "#ff0055"
  },
 
  {
    index:"section2",
    title: "NZ留学＆鍵",
    color: "#1835f5"
  },
  {
    index:"section3",
    title: "サポート内容",
    color: "#22cc88"
  },
  {
    index:"section4",
    title: "留学適性判断",
    color: "#ffaa00"
  },
  {
    index:"section5",
    title: "留学体験談",
    color: "#0099ff"
  },
  {
    index:"section6",
    title: "ギャラリー",
    color: "#f403fc"
  },
  {
    index:"section7",
    title: "お問い合わせ",
    color: "#7c18f5"
  },

];

const { isSticky, element } = useSticky()



const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);


  
  // useEffect(() => {
  //   if(typeof window !== 'undefined') {
  //    require("jquery");
  //   }
  
   
  //   var flightpath = {
	// 		entry : {
	// 			curviness: 1.25,
	// 			autoRotate: true,
	// 			values: [
	// 					{x: 100,	y: -20},
	// 					{x: 300,	y: 10}
	// 				]
	// 		},
	// 		looping : {
	// 			curviness: 1.25,
	// 			autoRotate: true,
	// 			values: [
	// 					{x: 510,	y: 60},
	// 					{x: 620,	y: -60},
	// 					{x: 500,	y: -100},
	// 					{x: 380,	y: 20},
	// 					{x: 500,	y: 60},
	// 					{x: 580,	y: 20},
	// 					{x: 620,	y: 15}
	// 				]
	// 		},
	// 		leave : {
	// 			curviness: 1.25,
	// 			autoRotate: true,
	// 			values: [
	// 					{x: 660,	y: 20},
	// 					{x: 800,	y: 130},
	// 					{x: $(window).width() + 300,	y: -100},
	// 				]
	// 		}
	// 	};
	// 	// init controller
	// 	var controller = new ScrollMagic.Controller();

	// 	// create tween
	// 	var tween = new TimelineMax()
	// 		.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
	// 		.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
	// 		.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

	// 	// build scene
	// 	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
	// 					.setPin("#target")
	// 					.setTween(tween)
	// 					.addIndicators() // add indicators (requires plugin)
	// 					.addTo(controller);
    
  //       }, [])

return (

  <>


<Head>
            <title key="title">ホーム</title>
            <meta
              name="description"
              key="description"
              content="エクセルニュージーランドは キミのホンキを本気で応援します！ 自然豊かな美しい国ニュージーランドの中でも、
              特にのどかで且つ近代的な街クライストチャーチで 留学を成功に導く経験豊富なサポートと自立と自信を育てる親身な関わりで、
               留学生のホンキを本気で応援します！"
            />
            <meta
              property="og:title"
              content="エクセルニュージーランド| ホーム"
              key="og:title"
            />
            <meta property="og:url" key="og:url" content="/home" />
            <link
              rel="canonical"
              key="canonical"
              href="https://www.ryugaku-excel.co.nz/"
            />
          </Head>

  <ElevationScroll>

 
    
      <ScrollNavigation elements={{ section1:{},section2:{},section3:{},section4:{},section5:{},section6:{},section7:{}}}>
    
    {({ refs,goTo,activeElement }) => (
    <Grid container direction="column" >
    
      
      <header className={`${headerClassName} ${isSticky ? "navbar1 navbar-sticky" : "navbar1"}`} ref={element}>
    
        <div className="row">
       <div className="hover_over">
          <a onClick={() => Router.push('/')} className="logo" href="#">
          <img src="/assets/logo.png" alt=""/>
          </a>
    </div>
          <div
            className="mobile-wrapper"
            role="button"
            onClick={() => {setStatus(status === 'open' ? 'close' : 'open'),setIsOpened(!isOpened)}}
          >
            <span className={status}></span>
            <span className={status}></span>
            <span className={status}></span>
          </div>
        
          <header>
    
    <AnimateSharedLayout>
    <nav>
          <ul style={{ transform: "translateZ(0)" }}>
            {screens.map(({ title, color,index}:Title, i) => (
            
             <motion.li
                animate 
                key={i}
                className={`title ${index === selected || activeElement === index ? "selected" :" "  }`}
                // id={`title ${activeElement === index && "selected"}`}
                style={{ color: index === selected || activeElement === index ? color : "#333" }}
                //@ts-ignore 
                onClick={() => {setSelected(activeElement === index&&index),goTo(index)}}
              >
     
                {index === selected  && (
                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
                  { activeElement === index && (  
            
                  <motion.a
                    layoutId="underline"
                    className="underline"
                    style={{ backgroundColor: color }}
                  />
                )}
              
                {title}
              </motion.li>
              
    
    
            ))}
          </ul>
          </nav>
        </AnimateSharedLayout>
    </header>
      
    
    
        </div>
      </header>
    
   
      <div className="hero" >
     
      {/* <div className="opacity">
        
  */}
  <div className="headline">
  <span className="hover_over">
      <HeadLine/>
      </span>
      </div>
    
    <a className="container" href="#">
    <span className="hover_over">
      <span className="chevron"></span>
      <span className="chevron"></span>
      <span className="chevron"></span>
      <span className="chevron"></span>
      </span>

      <span className="hover_over">
      <span className="text">
        <Typewriter
  options={{
    strings: ['下にドラック'],
    autoStart: true,
    loop: true,
  }}

  onInit={(typewriter) => {
    typewriter.typeString('下にドラック')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}

  /></span>
  </span>
    </a>
    <div className='cursor' id="cursor"></div>
	<div className='cursor2' id="cursor2"></div>
	<div className='cursor3' id="cursor3"></div>

  

    <div className="curve">
    <svg  tab-index="-1" viewBox="0 0 545 26" fill="#F1F1F1">
        <path
          d="M292 9.60972C375.5 -4 490.951 -2.62191 546 10V26H546H0C0 11.3221 -1 26 -1 7.45941C68 30 191.63 25 292 9.60972Z"
          fill="#F1F1F1"
        />
      </svg>
 
    
      </div>
      </div>
    
    {/* </div> */}
   
  

    <CookieConsent  location="bottom" buttonText="理解しました"　declineButtonText="拒否"
    cookieName="myAwesomeCookieName3"　enableDeclineButton  overlay>
当サイトでは利便性向上や閲覧の追跡のためにGoogle・他連携サービスによりCookieが使用されています。
サイトの閲覧を続けた場合Cookieの使用に同意したことになります。
</CookieConsent>



    {/* <Hidden xsDown> */}
    <div  ref={refs.section1} />
   

    <section className="news">
        {/* <ScrollAnimation animateIn='fadeIn'
     animateOut='fadeOut'>
    <div className="float position--highlight-top-right-big">
    <svg  viewBox="0 0 490 397" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="520" height="520" fill="#3E8145"/>
</svg>

</div>
</ScrollAnimation> */}
  
      <div className="news_inner">
      
        <div className="news_box">
  
        <p >

       
        <ScrollAnimation animateIn='fadeIn'
     animateOut='fadeOut'>
        <span className="hover_over"> <strong className="big">エクセルニュージーランドは</strong> </span>
キミのホンキを本気で応援します！
自然豊かな美しい国ニュージーランドの中でも、特にのどかで且つ近代的な街クライストチャーチで
 留学を成功に導く経験豊富なサポートと自立と自信を育てる親身な関わりで、  <span className="hover_over"> <strong style={{color:"black",fontWeight:400}}>留学生のホンキを本気で応援します！ </strong> </span>
 ニュージーランド、クライストチャーチでの、中学、高校、大学、語学学校、専門学校留学を、成功に導く 
 経験豊富な留学サポート、そして 入学手続きから、渡航準備、到着後のオリエンテーション、学校生活、ホームステイの留学全般 
 最初から最後まで安心にサポートいたします。 ご気軽にご相談ください。
 </ScrollAnimation>
        </p>


        <ScrollAnimation animateIn='fadeIn'
     animateOut='fadeOut'>
        <div className="news_img">
        {/* <Lottie options={Op} height={"95"} width={"80"} /> */}
        <img src="assets/earth.jpg" />
          </div>
          </ScrollAnimation>

     
          </div>

      
     <div >

  

        <h2 >
      
          <img src="/assets/bell.svg"
              className={classes.bell}>
                 
              </img>
             
              ExcelNzからお知らせ</h2>
        <ol className="ordered-list">

        {loadingN ? (
              <Loading/>
        
          ) : (
            dataN &&
            dataN.notices.map((n) => (
          <motion.li initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.8} }}>
         <strong style={{marginLeft:"10px"}}><dt><time>{moment(n.createdAt).format("YYYY/MM/DD")}</time></dt></strong> 
         {n.body}
          </motion.li>
           )))}
        </ol>
        <br />
        <p></p>
    
        </div>
  {/* {loadingN ? (
              <Loading/>
        
          ) : (
            dataN &&
            dataN.notices.map((n) => (
            <blockquote>
            <dl>
              <dt><time>{moment(n.createdAt).format("YYYY/MM/DD")}</time></dt>
            <dd>{n.body}</dd>
          </dl>
        </blockquote>
            )))} */}
 

        </div>

     
    </section>

    {/* </Hidden> */}
    
    {/* <Hidden mdUp>
    <section className="news">
    
      <div className="news_inner">
        <h2 ><img src="/assets/bell.svg"
               style={{width:"30px",height:"35px",paddingRight:"2px"}}></img>お知らせ</h2>
        <div className="news_box">
        Auckland has entered its second day of COVID-19 alert level 3 and the rest of New Zealand remains at level 2.
The super city was placed into lockdown on Saturday night after a Papatoetoe High School student tested positive for COVID-19 along with their mother. The case had been infectious for as long as a week and hadn't been in isolation.

There was an additional community case of COVID-19 reported on Sunday - linked to the original cluster and in Auckland's Jet Park Hotel quarantine facility.

What you need to know:
Auckland is at COVID-19 alert level 3 and the rest of New Zealand at level 2 for seven days
Prime Minister Jacinda Ardern revealed on Monday the latest cases had contact with an infected family during the last alert level 3 lockdown - information they hadn't previously disclosed. They are UK variant cases and genomically linked to the original February Auckland cluster 
One of the latest cases went to the gym after getting a COVID-19 test, but before receiving the result

What you need to know:
Auckland is at COVID-19 alert level 3 and the rest of New Zealand at level 2 for seven days



      {loadingN ? (
              <Loading/>
        
          ) : (
            dataN &&
            dataN.notices.map((n) => (
           
         
            
            <div>{n.body}</div>
      
    
            )))}  

        </div>
      </div>
     
    </section>
  
    </Hidden> */}



<svg className="curvetwo" tab-index="-1" viewBox="0 0 545 17" fill="#fff">
        <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
       191.63 16.3461 292 6.28327Z" fill="#fff"/>
      </svg>
     

    <Grid>
   
      <Grid
     
       item
       container
       direction="row"
       className={classes.primaryContainer}
      style={{background:"#f7f8fc"}}
    
      ref={refs.section2}
     >

     <Grid ref={refs.section2}>

     <About/>
    </Grid>
    

     <Grid >
     <Grid

            item
            container
            direction="column"
            className={classes.rowContainer}
           
          >
    {/* <ScrollAnimation animateIn='bounceInRight'
      animateOut='bounceOutLeft'>
   
    </ScrollAnimation> */}
<Hidden　mdDown>
<ScrollAnimation duration={5}
  animateIn='tada'
  initiallyVisible={true}>
   <Grid item className="talk-bubble tri-right border round btm-left-in" 
   style={{marginBottom:"1em",marginTop:"1em"}}>
    
    <Grid item container className="talktext">
       
        <p>  
        &nbsp;正しい留学成功の３つの鍵&nbsp;
          
          </p><span><img src="/assets/key.svg" 
        style={{height:"30px",width:"30px"}}></img></span>
    </Grid>
    </Grid>
</ScrollAnimation>
</Hidden>
  

  <Hidden lgUp>

   <Grid item className="talk-bubble tri-right border round btm-left-in" 
   style={{marginBottom:"1em",marginTop:matchesXS? "4em":"1em",marginLeft:matchesSM? "5px":0}}>
    
    <Grid item container className="talktext">
       
        <p> &nbsp;正しい留学成功の３つの鍵&nbsp;</p><span><img src="/assets/key.svg" 
        style={{height:"30px",width:"30px"}}></img></span>
    </Grid>
    </Grid>

  </Hidden>
    



            <Grid item container justify={matchesMD ? "center" : "center"}>
 
      
   
     
              <Grid
                item
                container
                direction="column"
                md
                alignItems={matchesMD ? "center" : "center"}
                className={classes.boxContainer}
              >
              <Grid item>
                <Typography  variant="h5">
                ①正しい留学先を選ぶ−どうしてクライストチャーチなの？
                  </Typography>
        
                <Grid item container justify="center" style={{paddingTop:"3em"}}>
                <ScrollAnimation animateIn='fadeIn'
                   animateOut='fadeOut'>
                  <img
                    src="/assets/earth.svg"
                    alt="choose place for abroad"
                    style={{ maxWidth: matchesMD ? 80 : 100 }}
    
                  />
                  </ScrollAnimation>
                </Grid>
             
                </Grid>
             
                <Grid item　style={{paddingTop:"2em"}}>
                  <Typography variant="caption">
                  <ReadLimit>政治、治安が安定し、留学生に対する理解とサポートが充実した国、ニュージーラ
ンド。世界初、政府による「留学生の生活保障に関する服務規程」が設置されてお
り、留学生の安全と権利が守られています。また教育先進国として、2017年エコノ
ミスト英誌では、ニュージーランドは未来教育指数（Education Future Skill）世
界１位に評価されました。世界クラスの教育を受けることが可能です。
そして、ニュージーランドの第二の都市、40万人が暮らすクライストチャーチ
は、バスシステムが整っていて、学校、文化施設、公共施設、公園やビーチへ
のアクセスが簡単です。都会でありながら自然を感じることが出来る街、多様
性に柔軟で人々が親切な街、それがクライストチャーチです。
ここクライストチャーチで、「アナタ流」の留学をご提案させていただきます
。（参考)
{/* <br/><a href="https://www.christchurchnz.com/study">https://www.christchurchnz.com/study</a> */}
</ReadLimit>
                  </Typography>
                </Grid>
               
              </Grid>
         
    
          
    
    
              <Grid
                item
                container
                direction="column"
                md
              
                alignItems={matchesMD ? "center" : "center"}
                className={classes.boxContainer}
              >
                <Grid item>
                <Typography  variant="h5">
                ②正しい学校を選ぶ−個性に合った学校選び
                  </Typography>
                
                <Grid item container justify="center" style={{paddingTop:"1em"}}>
                <ScrollAnimation animateIn='fadeIn'
                   animateOut='fadeOut'delay={1200}>
                  <img
                    src="/assets/school.svg"
                    alt="choose school"
                    style={{ maxWidth: matchesMD ? 80 : 100,paddingTop:"20px",paddingBottom:"10px" }}
    
                  />
                  </ScrollAnimation>
                </Grid>
        
                </Grid>
                <Grid item style={{paddingTop:"2em"}}>
                  <Typography variant="caption">
                  <ReadLimit>正しい学校を選ぶ−個性に合った学校選び
自分に合った学校選びは、留学環境の決め手です。
留学生一人ひとりの特性、目的/ゴールに合った校風、カリキュラムを考慮し、話し
合いながら学校選びをします。
中高校留学の場合、公立、私立（ミッション系も含む）、共学、男子校、女子校、アカデミック校、ラグビー強豪校、その他スポーツや音楽に力を入れた学校から考慮して選びます。

また、大学、専門学校、語学学校など、あなたの目的/ゴール、英語力に合った学校をご紹介いたします。年齢は問いません。自分に合った学校が見つかるはず。
必要な英語力は、渡航までに、中学生は英検３級レベル、高校生は準２級レベルい以上の英語力があることが望まれます。語学学校留学は、現段階での英語力から、留学を始めることが出来ます。大学、専門学留学におきましては、まずご相談ください。
</ReadLimit>
                  </Typography>
                </Grid>
              </Grid>
              
    
              <Grid
                item
                container
                direction="column"
                md
                alignItems={matchesMD ? "center" : "center"}
                justify="center"
                className={classes.boxContainer2}
              >
              
                <Grid item>
                <Typography  variant="h5">
                  ③正しいエージェントを選ぶ−どうしてExcel NZなのか
                  </Typography>
                  <ScrollAnimation animateIn='fadeIn'
                   animateOut='fadeOut' delay={1500}>
                  <Grid item container justify="center" style={{paddingTop:"1em"}}>
                
                  <img
                    src="/assets/search.svg"
                    alt="search company"
                    style={{ maxWidth: matchesMD ? 80 : 100,paddingTop:"30px"}}
                  />
               
            </Grid>
            </ScrollAnimation>
                </Grid>
                <Grid item style={{paddingTop:"2em"}}>
                  <Typography variant="caption">
                  <ReadLimit>
                  一言に留学エージェントと言っても、サービス/業務内容、料金体制も様々です。
Excel NZの主なサービス/業務内容は、現地ガーディアンサポート業務です。ガーディアンと
は、身元引受人のことです。留学生の矢面に立つ存在です。
独自のオリエンテーションやワークショッププログラムを持ち、英語の習得及びコミュケー
ション力の向上のみに留まらず、人として自信とグローバルな視野を持ち、国境を超えた世
界を舞台に生きる力、人間性を育むサポートを目指します。Excel NZは、一人ひとりの留
学を、現地クライストチャーチでサポートします。また留学生、保護者、学校と、しっかり
コミュニケーションを取りながら、教育的配慮を持って留学生に関わっていきます。
Excel NZのモットーは、「もし、自分の子供が留学をして、こんな大人が身近にいて欲しい
、という大人でいる」ということ。励まし、教え、導き、時には叱り、時には甘やかす、業
務内容に現れない「信頼出来る人」であることをお約束いたします。
</ReadLimit>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

       
          </Grid>
         
          <svg className={classes.curve1}tab-index="-1" viewBox="0 0 545 17" fill="#F1F1F1">
        <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
       191.63 16.3461 292 6.28327Z" fill="#F1F1F1"/>
      </svg>
      
          </Grid>
        
          {matchesSM && <svg className={classes.curve1}tab-index="-1" viewBox="0 0 545 17" fill="#F1F1F1">
        <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
       191.63 16.3461 292 6.28327Z" fill="#F1F1F1"/>
      </svg>}
    </Grid>
   
  
      </Grid> 
   
      
      
      {/* <Grid
       item
     
  
       className={classes.bannerContainer}
    
       style={{ backgroundColor:"#2b0aad"}}
     >  
      </Grid> */}
    {/* <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#E6F81B"/>
</svg> */}
      <Grid item ref={refs.section3}>
    
    <Grid container className={classes.desContainer}justify="flex-start" 
    alignItems="center" direction="row">
  
  
     <Hidden mdUp> 
     
     <Grid xs item className={classes.textContainer}>
   
   <Typography  variant={matchesXS ?"h5":"h3"}>
   <span style={{color:"#a8bbff",marginRight:matchesXS ?"5px":".5rem",marginLeft:0}}>
     ■</span>Excel NZの主なご提供サービス
       </Typography>
    
   {/* <Typography variant="h5"style={{marginLeft:"3rem",marginTop:"1rem"}}>
   Excel NZの主なご提供サービス
       </Typography> */}
          {/* align="center" */}
        
   <Typography variant="h6" style={{marginTop:matchesXS?0:'20px',marginRight:matchesXS?"1.2rem":0,marginLeft:"1rem"}}>
 
   <br/>−中学、高校生正規留学案内、及び現地留学サポート
   <br/>−英語習得の為の語学留学案内、及び現地留学サポート
   <br/>−高校卒業後、進路としての大学、各種専門学校の留学案内、及び現地留学サポート
・その他サービス
   <br/>−無料各種学校申し込み代行、海外旅行保険加入代行
       </Typography>
   
    </Grid>
     <Grid sm item className={classes.animation}>
         <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
       </Grid>
   
     </Hidden>

     <Hidden smDown> 
     <Grid xs item className={classes.textContainer}>
    <ScrollAnimation animateIn='fadeIn'>
    <Typography  variant={matchesXS ?"h5":"h1"}>

    <span style={{color:"#a8bbff",marginRight:matchesXS ?0:".5rem",marginLeft:matchesXS ?"1.25rem":".5rem"}}>
      ■</span>Excel NZの主なご提供サービス
        </Typography>
        </ScrollAnimation>
    {/* <Typography variant="h5"style={{marginLeft:"3rem",marginTop:"1rem"}}>
    Excel NZの主なご提供サービス
        </Typography> */}
           {/* align="center" */}
           <ScrollAnimation animateIn='fadeIn'>
    <Typography variant="h6" style={{marginTop:'20px',marginRight:matchesXS?"1.5rem":0,marginLeft:matchesXS?"1.5rem":"2rem"}}>
  
    <br/>−中学、高校生正規留学案内、及び現地留学サポート
    <br/>−英語習得の為の語学留学案内、及び現地留学サポート
    <br/>−高校卒業後、進路としての大学、各種専門学校の留学案内、及び
    <br/>現地留学サポート
・その他サービス
    <br/>−無料各種学校申し込み代行、海外旅行保険加入代行
        </Typography>
        </ScrollAnimation>
     </Grid>
     {/* <ScrollAnimation animateIn='bounceInLeft'animateOut='bounceOutRight'> */}
     <ScrollAnimation animateIn='fadeIn'>
     <Grid xs item className={classes.animation}>
         <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
       </Grid>
       </ScrollAnimation>
     </Hidden>
    </Grid>
    
    
    </Grid>
    <Grid style={{marginTop:"2rem"}}>
    <CallAnimation/>
   
    </Grid>


    

    
      <Grid item ref={refs.section4}>
      <Grid item>

<Grid item container className={classes.supportContainer}>
<div className="floater position--highlight-top-left">
<svg width="185" height="187" viewBox="0 0 185 187" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M87.8895 0.0314227C115.02 0.804677 136.859 19.0532 154.276 39.9319C172.377 61.6313 189.819 87.3465 183.782 114.984C177.702 142.817 151.166 159.15 125.544 171.456C100.015 183.718 71.0003 193.639 45.4476 181.427C19.802 169.17 7.94305 140.548 2.39887 112.603C-2.91742 85.806 0.0911219 57.7428 16.5973 36.0079C33.5566 13.6765 59.9125 -0.765949 87.8895 0.0314227Z" fill="#D9376E" fillOpacity="0.51"/>
</svg>


  
</div> 
{/* <div className="floater position--highlight-top-left">
<img src="assets/square.png" className="floater"></img>
</div> */}

{/* <div className="card hydrogen-card">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 320">
        <path className="waves" fill-opacity="1" d="M0,256L120,218.7C240,181,480,107,720,90.7C960,75,1200,117,1320,138.7L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
</div> */}

<Grid container className={classes.checkContainer}>
        <Grid item xs={12} className={classes.titleText}>
        {!matchesSM ?
        <Typography  variant={matchesXS ?"h5":"h1"} >
       <span style={{color:"#a8bbff",marginRight:matchesXS ?0:".5rem",marginLeft:".8rem"}}> ■ </span>1つでも当てはまった人は 今すぐ相談  
        </Typography>:
    <Typography  variant={matchesXS ?"h5":"h3"} >
    <span style={{color:"#a8bbff",marginRight:matchesXS ?0:".5rem",marginLeft:matchesXS ?"0.1":".8rem"}}> ■ </span>1つでも当てはまった人は 今すぐ相談  
     </Typography>
}
        </Grid>
       
        <Grid item xs={12} container >
         
          <Grid item xs container direction="column" style={{height:"400px",marginLeft:"3px"}}>
    
      <Hidden smDown>
      {!matchesSM ?
    ( <Grid item className={classes.checkboard} xs={1}>
 <ScrollAnimation  
          duration={7}
     animateIn='tada'
          initiallyVisible={true}>
            <Lottie options={CheckOptions} height="13rem" width="13rem" />
           </ScrollAnimation>
            </Grid>):   
            (<Grid item className={classes.checkboard} xs={1}>

            <Lottie options={CheckOptions} height="13rem" width="13rem" />
         
            </Grid>)}
            </Hidden>


         {/* 12->11 */}
            <Grid item xs={12}>
                <Grid item xs container direction="column">
    
    
                   <Hidden mdDown>
                  <Grid item xs={12}>



         
                      <Grid item xs container direction="row" >
                        <Grid item xs={1} >
                         <ScrollAnimation animateIn='bounceInRight' 
                    
                        animateOut='bounceOutLeft'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem"
                        ,width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                    </ScrollAnimation>
                  
                     {/* <Check /> */}
                  
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em"}}>
                        ニュージーランドに興味があり、ニュージーランドに留学してみたい。
                        </Grid>
                      </Grid>
                   
                  </Grid>




                  <Grid item xs={12}>
                   
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                        <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem"
                        ,width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                    </ScrollAnimation>
                        
                    
                     
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em"}}>
                        留学を通して、いろんなことに挑戦してみたい。
                        </Grid>
                      </Grid>
                   
                  </Grid>


                  <Grid item xs={12}>
                  
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                        <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutRight'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem",width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                        </ScrollAnimation>
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em"}}>
                        留学を通して、英語とコミュニケーション力を身につけたい。
                        </Grid>
                      </Grid>
                  
                  </Grid>


                  <Grid item xs={12}>
                  
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                        <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'>
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "2.5rem":"3rem",width: matchesXS ? "2.5rem":"3rem"}} alt="clip"/>
                       </ScrollAnimation>
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em"}}>
                        留学を通して、多様性を肌で感じ、グローバルな感覚を見につけて
                        <br/>人として大きく成長したい。
                        </Grid>
                      </Grid>
                  
                  </Grid>
</Hidden>
    


    
                   <Hidden lgUp>
                  <Grid item xs={11}>



         
                      <Grid item xs container direction="row" >
                        <Grid item xs={1} >
                       
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "1.6rem":"3rem"
                        ,width: matchesXS ? "1.6rem":"3rem"}} alt="clip"/>
                  
                  
                     {/* <Check /> */}
                  
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em",marginBottom:matchesXS ?"10px":0}}>
                        ニュージーランドに興味があり、ニュージーランドに留学してみたい。
                        </Grid>
                      </Grid>
                   
                  </Grid>




                  <Grid item xs={12}>
                   
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                        
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "1.6rem":"3rem"
                        ,width: matchesXS ? "1.6rem":"3rem"}} alt="clip"/>
              
                        
                    
                     
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em",marginBottom:matchesXS ?"10px":0}}>
                        留学を通して、いろんなことに挑戦してみたい。
                        </Grid>
                      </Grid>
                   
                  </Grid>


                  <Grid item xs={12}>
                  
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                 
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "1.6rem":"3rem",width: matchesXS ? "1.6rem":"3rem"}} alt="clip"/>
                       
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em",marginBottom:matchesXS ?"10px":0}}>
                        留学を通して、英語とコミュニケーション力を身につけたい。
                        </Grid>
                      </Grid>
                  
                  </Grid>


                  <Grid item xs={12}>
                  
                      <Grid item xs container direction="row">
                        <Grid item xs={1}>
                    
                        <img src="/assets/checkmark.svg"style={{ height: matchesXS ? "1.6rem":"3rem",
                        width: matchesXS ? "1.6rem":"3rem"}} alt="clip"/>
                     
                        </Grid>
                        <Grid item xs={11} style={{fontSize:matchesXS ?"1.2rem":"1.5em",marginBottom:matchesXS ?"10px":0}}>
                        留学を通して、多様性を肌で感じ、グローバルな感覚を見につけて
                        <br/>人として大きく成長したい。
                        </Grid>
                      </Grid>
                  
                  </Grid>
</Hidden>
    
    
    
    
    
    
                </Grid>

               
           
            </Grid>
            {/* サイズM 消す */}
            {/* <Hidden smDown>
              <div className="floater position--highlight-top-right">
            <Lottie options={ClickOptions} height="4rem" width="4rem" />
            </div>
            <ScrollAnimation animateIn='fadeIn' delay={500}>
            　<Link href="/contact">
            <Button
           
                variant="contained"
                className={classes.btn}
              >
           
             <span style={{ marginRight: 3}}>お問い合わせ</span>
      
                <ButtonArrow
                  width={35}
                  height={35}
                  fill="#fff"/>
              </Button> 
              </Link>
              </ScrollAnimation>
             </Hidden> */}

          </Grid>

        </Grid>     
      </Grid>
     

</Grid>

</Grid>

    </Grid>
    
    
    <Grid item>
    <Grid container className={classes.flowContainer}
    alignItems={matchesXS ?"center":"flex-start"} direction="column" >
    
    <Hidden lgUp>
    
    
    <Grid className={classes.imageContainer}>
      <Lottie options={Options}/>
  
  </Grid>
 
    


    </Hidden>

    <Hidden mdDown>
    <Grid className={classes.imageContainer}>
    {!matchesSM? (
    // <ScrollAnimation animateIn='bounceInRight'
    //   animateOut='bounceOutLeft'>
    <ScrollAnimation animateIn='fadeIn' >
      <Lottie options={Options} />
     </ScrollAnimation>):(
     
       <Lottie options={Options} />
  

  )}
  </Grid>
    </Hidden>
  {/* <div className="floater position--highlight-midle-right">
  <svg width="158" height="151" viewBox="0 0 158 151" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M77.9729 0.00019654C102.271 -0.0293226 128.19 3.24879 143.661 21.7173C159.377 40.4788 159.617 66.7691 153.687 90.3869C147.91 113.393 134.63 134.704 112.798 144.633C91.3499 154.388 66.669 150.135 45.6442 139.524C25.3259 129.269 10.4834 111.591 4.37346 89.9111C-2.15016 66.7638 -2.81718 40.5733 12.4875 21.8767C27.7145 3.27494 53.7242 0.0296558 77.9729 0.00019654Z" fill="#89C2EF"/>
</svg>

</div> */}


      <Grid className={classes.flow}>
      <ScrollAnimation animateIn='fadeIn'>
      <Typography variant={matchesXS ?"h5":"h2"}align="left" style={{marginLeft:matchesXS?"10px":0,marginBottom:"1rem",marginTop:matchesXS?"40px":0}}>
      <span style={{marginTop:matchesXS ?"2rem":0,marginRight:matchesXS?".1rem":".5rem",
      marginBottom:"1rem"}}>○</span>ご渡航までの流れ 
     </Typography>
     </ScrollAnimation>
    <StepperFnc/>
    </Grid>
  
  
    
    
    
    </Grid>   
    
    </Grid> 


    {/* <section className="banner-container banner">
  <div className="banner__inner">
    <div className="banner__images"><img className="banner__image" src="https://images.unsplash.com/photo-1508781197106-d8c535dcf276?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
    <div className="banner__content">
      <div className="banner__headline"><span>How Neat is That?</span></div>
    </div>
  </div>
</section> */}
  
    {matchesXS ? 
    <svg className={classes.curve} tab-index="-1" viewBox="0 0 545 17" fill="#f7f8fc">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="#f7f8fc"/>
</svg>: <svg className={classes.curve2} tab-index="-1" viewBox="0 0 545 17" fill="#f7f8fc">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="#f7f8fc"/>
</svg>
}





    <Grid item ref={refs.section5} className={classes.svg}>
 
<Card  data={data} error={error} loading={loading}/>    
      
  
    {/* <div className={classes.curve1}>
   <svg  tab-index="-1" viewBox="0 0 545 17" fill="black">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="black"/>
</svg>


  </div> */}


    </Grid> 
   
  

    <Grid item className={classes.gallery}ref={refs.section6}>
    <Gallery/>
    </Grid> 
   

    <div className="curve3">
   <svg  tab-index="-1" viewBox="0 0 545 17" fill='#f1f1f1'>
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="#f1f1f1"/>
</svg>


  </div> 
 

    
    
{/* 
    {!matchesXS && 
    <Grid
       item  
       className={classes.bannerContainer}
       style={{backgroundColor:"#2b0aad"}}
     >
      </Grid>
    } */}


      <Grid item ref={refs.section7}>
   
      <Carousel/>
      </Grid> 
    
  
  
  
      <Grid item >
   

      <Footer/>
  
      </Grid> 
      
    </Grid>
   


   
    )}
    </ScrollNavigation>
    </ElevationScroll>

</>
)
};




export default withApollo({ ssr: true })(Home)




