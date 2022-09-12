import React,{useState,useEffect}from 'react'
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Hidden from "@material-ui/core/Hidden";

import {
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  TableFooter,
  TableRow,
  TablePagination,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ScrollAnimation from 'react-animate-on-scroll';
// import StudentDialog from '../../pages/card/[studentDialog]'
// import { withApollo } from '../../lib/withApolloData'
// import GET_POSTS from '../graphql/query/posts';
// import { useMutation,useQuery} from '@apollo/react-hooks';
import moment from 'moment'
import Link from 'next/link';
import Loading from './Loading'
import { useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  papper:{
    height:"100%",
    width: '100%',
    position:'relative',
    margin:"1em 4em 2em 0",
    // backgroundColor: '#0045ad',
    backgroundColor:"#f7f8fc",
 
    [theme.breakpoints.down("xl")]: {
      maxWidth: '100%',
      marginLeft:"1rem",
    margin:"0",
    padding:"180px"
    },
    [theme.breakpoints.down("lg")]: {
     width: '100%',
     maxWidth:"1000px",
    marginTop:"10em",
    marginBottom:"8em",
    marginLeft:"210px",
    padding:0
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: '80%',
    margin:"10em 12.5em 16em 13.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: '70%',
    margin:"10em 10em 16em 8em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
      marginTop:"4rem",
      marginRight:"5%",
      marginLeft:"5%",
      marginBottom:"2rem"
    }
  },  
  curve:{
    position: "absolute",
    width: "100%",
    bottom: "-5px",

    fill: "#f1f1f1"
    // fill:#1c2e4a;
   },
  card:{
  margin:0,
  objectFit: "cover",
  borderRadius:'8px',
  height:"100%",
  minHeight:"600px",
  backgroundColor:'white',
  
  transition: `all 0.2s ease-in-out`,
  '&:hover,&:active':{
      boxShadow: '0px 2px 24px 0px rgba(153, 153, 153, 0.22)',
      cursor: 'pointer',
    transform: 'translateY(-5px)'
    
},
[theme.breakpoints.down("md")]: {

  marginTop:"30px",
 

},
[theme.breakpoints.down("sm")]: {

 
},

  [theme.breakpoints.down("xs")]: {

    margin:"1em 0.5em 1em 0.5em",
   
    height:"100%",
    maxHeight:"600px"
  
},

  },

  file: {
    // marginRight:"2.5%",
    // marginLeft:"2.5%",
    borderRadius:'8px',
    width:"100%",
    height:'300px',
  }, 
  switch:{
    marginTop:"5em"
  },
  pagination:{
    width:"100%",
    marginBottom:"3em",
  },

  description:{
    marginTop:"2rem",
    height:"100%",
  maxHeight:"400px",
  },
  box:{
marginTop:"2rem"
  },
  text:{
    fontSize:"0.5em"
  },  
  h1:{
    fontFamily: `Noto Sans TC, sans-serif`,
      fontWeight: 650,
      fontSize: "3.2rem",
      color: "#a8bbff",

      lineHeight: 1.5,
      marginBottom:"4rem",
      [theme.breakpoints.down("xl")]: {
        
        fontWeight: 650,
        fontSize: "3.5rem",
     
        marginBottom:"8rem",
      },
      [theme.breakpoints.down("lg")]: {
        fontFamily: `Noto Sans TC, sans-serif`,
        fontWeight: 650,
        fontSize: "3.4rem",
      
        lineHeight: 1.5,
        marginBottom:"4rem",
      },
      [theme.breakpoints.down("md")]: {
       
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.3rem",
        marginBottom:"2rem"
      
    },  
  },
  })
)


// width:"100%"
// maxWidth:"600px"

interface Props {
  // toggleListReverse:() => void;
  toggleSortDate:() => void;
}



interface Data {
  _id:number,
  file:string,
  postTitle:string,
  description:string,
  createdAt:string,
  username:string
}




function Card({data,error,loading}) {
  const { file } = useStyles()
  const classes = useStyles();
  const router = useRouter();




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);
  const [postList,setPostList] = useState<Data[]>([])
  const [isOldestFirst,setisOldestFirst] = useState(true)
  



  const { postId } = router.query;

 

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event:unknown, newPage:number) => {
    setPage(newPage);


  }

  const sortByDate = () => {
    let newPostList = postList
    if (isOldestFirst) {
      newPostList = postList.sort((a, b) =>Date.parse(a.createdAt) - Date.parse(b.createdAt))
    } else {
      newPostList = postList.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    }
    setPostList(newPostList)
    setisOldestFirst(!isOldestFirst)
  }

  const toggleSortDate =()=> {
    sortByDate()
 }



const theme = useTheme();
const matchesXL = useMediaQuery(theme.breakpoints.down("xl"));
const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};


useEffect(()=>{
  if(!loading){
    const postList = data.posts
    setisOldestFirst(true)
    setPostList(postList)
  }
  // setLoading(!loading)
  
},[postList])


const ReadLimit = ({ children, maxCharacter = 148 }) => {
  const text = children;
  const resultString = text.slice(0, maxCharacter);

  return (

    <Typography style={{fontSize:"1rem"}}>
          {resultString}
   </Typography>
  
    
 
   
  );
};

  return (
    <>
  <Grid className={classes.papper}>
  <motion.div
   initial="initial"
   animate="enter"
   exit="exit"
   variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
  >

    <Grid item container direction="row"  justify="center" lg>
    <ScrollAnimation animateIn='fadeIn'>

    <div className={classes.h1}>
            留学体験談のご紹介
      </div> 
      
</ScrollAnimation>
    

      {/* <Grid item container direction="row"  justify="flex-end" md>
    <SwitchLabels toggleSortDate={toggleSortDate}/> 
      </Grid> */}

      
      </Grid> 




  <Grid container spacing={3} alignItems="center" justify="space-around">
   
  {(rowsPerPage > 0
   ? postList && postList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  : postList )
      .map((d)=>( 

        <Grid item className={classes.card} container direction="column"md={5}>
     
 
      <Grid  item container direction="row" justify="space-between">
      <motion.div variants={postVariants}> 
        <Box display="inline-block" >

            <Link scroll={false} href={`/card/[studentDialog]=${d._id}`} as={`/card/${d._id}`}>
          <a style={{color: "black"}}>
          <motion.div whileHover={{
    scale: 0.95,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.95 }}>
      <img src={d.file} className={file} alt="" />
      </motion.div>
      
      <Typography variant="h5" gutterBottom style={{marginTop:"5px"}}>
         {d.postTitle} 
        </Typography>
  
      <Typography variant="h5" gutterBottom>
      <ReadLimit>
          {d.description}
        
          </ReadLimit>
          <Typography style={{fontSize:"1.1rem",fontWeight:700}}>...続きを読む</Typography>
      
           </Typography>
           
      </a>
          </Link>

     
            
        
        </Box>
        </motion.div> 
        {/* <Typography variant="h6" gutterBottom>
        <time>{d.createdAt}</time>
          </Typography> */}
 
 
      </Grid>
  

   
    </Grid>
      ))}
</Grid>



<div style={{marginTop:"50px",marginLeft:"50px"}}>
<TableFooter>
<TableRow>
  <TablePagination

    rowsPerPageOptions={[2,4,6]}
    colSpan={2}
    count={postList.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onChangePage={handleChangePage}
    onChangeRowsPerPage={handleChangeRowsPerPage}
    >
  </TablePagination>
</TableRow>
</TableFooter>
</div>

     </motion.div>
 
    
   </Grid>
 
   {/* <div className={classes.curve}>
   <svg  tab-index="-1" viewBox="0 0 545 17" fill="black">
  <path d="M292 6.28327C375.5 -2.61539 490.951 -1.71433 546 6.53845V17H0C0 7.4029 -1 17 -1 4.8773C68 19.6154 
 191.63 16.3461 292 6.28327Z" fill="black"/>
</svg>

  </div> */}


</>
  )
}


export default Card