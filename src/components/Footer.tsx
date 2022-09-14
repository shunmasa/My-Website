import React,{useState,useEffect} from "react";
// import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// import { NextPage } from 'next';
import Link from 'next/link'
import { sortedLastIndexOf } from "lodash";
const useStyles = makeStyles(theme => ({
  footer: {
    background: `linear-gradient(-8deg, #0045ad 50%, #073882 50.1%)`,
    // backgroundColor:"#4b89dc",
    width: "100%",
    position: "relative",
   height:"15em"

  },

  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  linkStyle:{
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    "&:visited":{
      color:"#fff"
    }
  },

  gridItem: {
    margin: "4em"
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "2em"
    }
  },
  socialContainer: {
    marginTop: "1em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  },
  curve:{
    position: "absolute",
    width: "100%",
    bottom: "-2px",

    fill: "#f1f1f1"
    // fill:#1c2e4a;
   },
}));

// interface IProps {
//   setValue:(value:number)=>void;
//   setSelectedNum:(selectedNum:number)=>void;
// }

//  const Footer:NextPage<IProps>= (props)=>{
  const Footer= ()=>{
  const classes = useStyles();
//   const [date , setDate] = useState();
//  const getYear = () =>  setDate(new Date().getFullYear())
 
//  useEffect(() => {
//   getYear();
// }, [])

  return (
    <>

    <footer className={classes.footer}>
 {/* <div className="curve1">
   <svg  tab-index="-1" viewBox="0 0 545 17" fill="black">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="black"/>
</svg>

  </div> */}
      <Hidden mdDown>
        <Grid container justifyContent="center" className={classes.mainContainer}>
    
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                // onClick={() => props.setValue(0)}
                // href="/"
                className={classes.linkStyle}
              >
                <Link href="/">
               <a style={{color:"#fff"}}>ホーム</a>
                </Link>
                
              </Grid>
            </Grid>
          </Grid>
        
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                // onClick={() => props.setValue(0)}
                // href="/"
                className={classes.link}
              >
                <Link href="/login">
                <a href="/login"style={{color:"#fff"}}>ログイン</a>
                </Link>
               
              </Grid>
            </Grid>
          </Grid>
          
         

          <Grid item className={classes.gridItem}>
            <Grid
             item
              container
              direction="column"
              spacing={2}
             
              style={{ margin: 0 }}
              // component={Link}
              // href="/contact"
              className={classes.link}
            >
              <Grid
                item
              >
             
              <span style={{color:"#fff"}}>お問い合わせ</span>
             
              </Grid>

              <Grid
                item
              >
               excelnz@outlook.com
              </Grid>
              <Grid
                item
              >
               (+64)-21-1427-282
              </Grid>
            </Grid>
          </Grid>


          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >

              <Grid
                item
                className={classes.link}
              >
                SNSリンク
              </Grid>


              <Grid
          container
          spacing={2}
          className={classes.link}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com/pages/Excel-NZ/111770877271517"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>

        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>



            </Grid>
          </Grid>




        </Grid>



 

      </Hidden>

  
     
    </footer>
    </>
  );
}

export default Footer;
