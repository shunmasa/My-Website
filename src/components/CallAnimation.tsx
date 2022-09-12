import React from 'react';
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
// import SupportData from '../../public/assets/support.json'
import Call from '../../public/assets/call.json'
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ScrollAnimation from 'react-animate-on-scroll';
import Hidden from "@material-ui/core/Hidden";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //  marginTop:'7em'
    // },   
    animation: {
      maxWidth: "25em",
      // minWidth: "16em",
      marginTop: "2em",
      marginLeft:0,
      marginRight:0,
      [theme.breakpoints.down("xl")]: {
    
        maxWidth:"27em",
        marginLeft:"270px",
        margin:0
        },
      [theme.breakpoints.down("lg")]: {
        maxWidth:"23em",
        marginLeft:"130px",
        marginTop:"-120px"
        },
      [theme.breakpoints.down("md")]: {
  
        maxWidth:"320px",
        marginTop:0,
        marginLeft:"100px"
        },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "250px",
        marginLeft:0,
        
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "20em",  
        marginLeft:"2.5em",
        margintRight:".25",
        marginTop:"60px",
        margin:0
      }
    },
  
    desContainer:{

      height:"42rem",
      [theme.breakpoints.down("xl")]: {
        height:"45rem",
       marginLeft:0,
        width:"100%",
        marginRight:0

        },
      [theme.breakpoints.down("lg")]: {
        height:"45rem",
        marginLeft:0,
        marginRight:0,
        marginBottom:"6rem",
        width:"100%",
     
        },
      [theme.breakpoints.down("md")]: {
        height:"47rem",
        width:"100%",
        },
        [theme.breakpoints.down("sm")]: {
          height:"50rem",
          marginLeft:0,
          width:"100%",
          maxWidth:"768px"
        
          },
      [theme.breakpoints.down("xs")]: {
      height:"50rem",
      marginBottom:0,
      marginLeft:0,

      }

      }
    ,
    textContainer: {
      minWidth: "50em",
      marginTop:"5em",
      marginRight:"10em",
      marginBottom:"5em",
      [theme.breakpoints.down("xl")]: {
        width: "100%",
        marginTop:"5em",
        marginRight:"300px",

        marginLeft:"10em",
        marginBottom:"5em",
       
      },
      [theme.breakpoints.down("lg")]: {
     
        maxWidth: "750px",
        marginTop:"5em",
        marginLeft:"7em",
        marginRight:"8em",
        marginBottom:"10em",
       
      },
      [theme.breakpoints.down("md")]: {
        maxWidth: "600px",
        marginTop:"10em",
        marginRight:"100px",
        marginLeft:"20px",
        marginBottom:"2em",
      },
      [theme.breakpoints.down("sm")]: {
        minWidth:0,
        maxWidth:"480px",
        marginRight:0,
        marginLeft:"15px",

      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        minWidth:0,
        marginTop:"2rem",
        marginLeft:0,
        marginRight:0,
        
        marginBottom:0,
       
      },
    },
   
  })
);

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData:Call,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};



const CallAnimation= () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      
<Grid item>

<Grid container className={classes.desContainer}
alignItems="center" direction="row">

  
      <Hidden xsDown>  
      { matchesLG || matchesXL?
      ( <Grid sm item className={classes.animation}>

        {/* <ScrollAnimation animateIn='bounceInLeft'
         animateOut='bounceOutRight'> */}
   <ScrollAnimation animateIn='fadeIn' >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </ScrollAnimation>
          </Grid>):(
            <Grid sm item className={classes.animation}>
         
               <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
             
              </Grid>
          )}

   </Hidden> 

   
   <Hidden smDown>  

<Grid sm item className={classes.textContainer}>
<ScrollAnimation animateIn='fadeIn'>
<Typography variant={matchesSM ?"h3":"h2"} align={matchesXL?"left":"center"}>
<span style={{marginLeft:"-1.5rem",marginRight:".5rem"}}>○</span>ExcelNZ留学サポート内容のご紹介
 </Typography>
 </ScrollAnimation>
 <ScrollAnimation animateIn='fadeIn'>
<Typography variant="h5" style={{marginLeft:".5rem"}}>
現地ガーディアンサポート内容
 </Typography>
 </ScrollAnimation>
 <ScrollAnimation animateIn='fadeIn'>
<Typography variant="h6"  style={{marginTop:'35px',marginLeft:0,marginRight:0}}>
<span style={{border:"1px solid #0362fc"}}>留学手続き代行/渡航準備</span>
<span style={{marginLeft:"0.5rem",border:"1px solid #0362fc"}}>到着後</span> 空港迎え、到着後のオリエンテーション（学校生活、NZ生活について、地図の見方、バスの乗り方、登下校方法の確認、バスカード購入、携帯電話の使い方、学生ビザ申請及び健康診断（学生ビザ申請の必要があれば）、銀行口座開設、両替、インターネットバンキングの設定、銀行口座の詳細の報告）、初登校日　同行、制服/文房具購入サポート
<br/><span style={{border:"1px solid #0362fc",marginRight:"0.5rem"}}>留学中</span>学校生活全般サポート、ホームステイサポート
病気、怪我、事故、緊急災害時の24時間対応、必要な時の個別訪問
保護者へ近況報告レポート（月一回）
定期的な学校訪問(2週間に一度)、家庭訪問（1学期または必要に応じて）、生活指導、学習指導<br/>学期に一度のワークショップの開催（近況報告、学習・生活アドバイス、日本食、楽しいアクティビティー）NCEA対策会の開催
休暇中のアクティビティーや旅行のアレンジ、スキートリップの催行など
成績表の翻訳、三者面談同行、病気/怪我の際の医療機関への同行、帰国航空券の予約及び日付変更、海外旅行保険の申請代行、
帰国の際の空港サポート、次年度の学費等の継続手続きサポート、学校への各種支払いの代行（インターネットバンキング）、進路相談<br/><span style={{border:"1px solid #0362fc",marginRight:"0.2rem"}}>その他</span>必要に応じて学校、ホームステイ、保護者との連絡を取りながら、連携して留学生をサポートします。
 </Typography>
 </ScrollAnimation>
</Grid>

</Hidden> 



   <Hidden mdUp>  

   <Grid sm item className={classes.textContainer}>
  

<Typography variant={matchesXS ? "h5":"h3"} align={matchesXS ? "left":"center"}>
<span style={{marginLeft:matchesXS ?"10px":"-38px",marginRight:".1rem"}}>○</span>ExcelNZ留学サポート内容のご紹介
    </Typography>
    
<Typography variant="h6" style={{marginLeft:matchesXS ? "20px":0}}>
現地ガーディアンサポート内容
    </Typography>
       
<Typography variant="h6"  style={{marginTop:'35px',marginLeft:matchesXS ? "20px":0,marginRight:matchesXS ? "20px":0,fontSize:"1.1em"}}>
<span style={{border:"1px solid #0362fc"}}>留学手続き代行/渡航準備</span>
<span style={{marginLeft:"0.5rem",border:"1px solid #0362fc"}}>到着後</span> 空港迎え、到着後のオリエンテーション（学校生活、NZ生活について、地図の見方、バスの乗り方、登下校方法の確認、バスカード購入、携帯電話の使い方、学生ビザ申請及び健康診断（学生ビザ申請の必要があれば）、銀行口座開設、両替、インターネットバンキングの設定、銀行口座の詳細の報告）、初登校日　同行、制服/文房具購入サポート
<br/><span style={{border:"1px solid #0362fc",marginRight:"0.5rem"}}>留学中</span>学校生活全般サポート、ホームステイサポート
病気、怪我、事故、緊急災害時の24時間対応、必要な時の個別訪問
保護者へ近況報告レポート（月一回）
定期的な学校訪問(2週間に一度)、家庭訪問（1学期または必要に応じて）、生活指導、学習指導<br/>学期に一度のワークショップの開催（近況報告、学習・生活アドバイス、日本食、楽しいアクティビティー）NCEA対策会の開催
休暇中のアクティビティーや旅行のアレンジ、スキートリップの催行など
成績表の翻訳、三者面談同行、病気/怪我の際の医療機関への同行、帰国航空券の予約及び日付変更、海外旅行保険の申請代行、
帰国の際の空港サポート、次年度の学費等の継続手続きサポート、学校への各種支払いの代行（インターネットバンキング）、
進路相談<br/><span style={{border:"1px solid #0362fc",marginRight:"0.2rem"}}>その他</span>必要に応じて学校、ホームステイ、保護者との連絡を取りながら、連携して留学生をサポートします。
    </Typography>
 </Grid>

   </Hidden> 

  
</Grid>

<Hidden smUp>  
 <Grid sm item className={classes.animation}>

     <Lottie options={defaultOptions} height={"100%"} width={"100%"} />

   </Grid>

   </Hidden> 



</Grid>

    </>
  )
}

export default CallAnimation 
