import React from 'react'
import { Typography, Tabs, Paper, Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    backgroundColor: "#ffffff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2369adec' fill-opacity='0.42' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height:"100vh",
    position: 'relative',
    textAlign: 'center',
    overflowX: 'hidden',
    marginTop: '68px',
    // [theme.breakpoints.down("md")]: {
    //   width:"100%"
    //   },
    [theme.breakpoints.down("xs")]: {
      margin:0
    }
  },
  papper:{
    height:"100%",
    maxWidth: '80%',
    margin:"5em 10% 5em 10%",
    [theme.breakpoints.down("md")]: {
      maxWidth:"100%",
      margin:"3rem 1rem 5rem 1rem"
      },
    [theme.breakpoints.down("xs")]: {
      maxWidth:"100%",
      maxHeight:"100%",
      margin:0
    }
  },  
 
  item: {
    objectFit: 'cover',
    maxWidth: '500px',
    maxHeight: '300px',
    marginBottom:"1rem",
    marginTop: '1.5rem',
   
  },
  description: {
    marginTop: '1rem',
    marginRight: '1rem',
    marginLeft: '1rem',
    fontSize:"20px",
    fontWight:500,
    [theme.breakpoints.down("xs")]: {
      margin:0,
      fontSize:"15px"
    }
  },
}))

const StudentOverview = ({data,dataId,dialog}) => {
  const classes = useStyles()
  console.log('pppdata',data)

   


  return (
    
    <div className={classes.root}>
      <Paper component={Box} className={classes.papper}elevation={2}>
       
        
          <div >
    <img src={data.file} className={classes.item}/>

</div>

<div style={{ display: 'flex' }}>
  <Typography
    variant="body2"
    className={classes.description}
    align="left"
  >
   {data.description}
         
        
  </Typography>
</div>

     

      </Paper>
    </div>
  )
}

export default StudentOverview

