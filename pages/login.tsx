import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LOGIN_USER from '../src/graphql/mutation/login';
import { validateEmail } from '../src/utils/validation';
import { setToken } from '../src/utils/apolloClient';
import Cookies from 'js-cookie';
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
// import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../lib/withApolloData'
import { useRouter } from "next/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      developer masa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://unsplash.com/ja/%E5%86%99%E7%9C%9F/4OfKrwAa75s)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const InitialState ={
//   email:"",
//   password:""
// }
// interface Login {
//   [key: string]: any;
//   email:string;
//   password:string
// }
// interface LoginProps {} 

interface Error {
  error:string
}

const login = () => {
 const [props, setProps] = useState({email:"",
 password:""})

 const [login,{data,error}] = useMutation(LOGIN_USER)
 console.log("data:",data)

 const handleChange = (event:any) => {
  const { name, value } = event.target;
  console.log('value:',value)
     setProps(prevState =>({
      ...prevState,
      [name]: value}))
  };
const Router = useRouter();

  useEffect(()=> {
    const loginData = async () =>{
        if(data){
        // const { data } = await user.query({query: LOGIN_USER,variables: { ...props },});
        const { token, userId } = data.login;
        console.log("token",token)
        setToken(token);
        Cookies.set('userId', userId, { expires: 7 });

      } 
    }
    loginData()
  },[data]) // eslint-disable-line
  
  
const handleSubmit = async (event: any) => {
    console.log("email",props,"email",props.email)
    event.preventDefault();
    
  try {
    if (validateEmail(props.email)) {
      console.log('data',[props.email,props.password])
     await login({variables:{...props}})
     Router.replace('/dashboard');
    } else {
      toast.error('メールアドレスが間違っています');
    }
    } catch (error) {
      toast.error(error);
    }
  };

  const classes = useStyles();

  return (
 <Grid container component="main" className={classes.root}>
   
  <CssBaseline />
  <Grid item xs={false} sm={4} md={7} className={classes.image} />
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
   <div className={classes.paper}>
     <Avatar className={classes.avatar}>
       <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
      ログインページ
     </Typography>
     <form className={classes.form} noValidate onSubmit={handleSubmit}>
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         value={props.email}
         onChange={handleChange}
         autoComplete="email"
         autoFocus
       />
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         value={props.password}
         onChange={handleChange}
         id="password"
         autoComplete="current-password"
       />
    
             <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              value='Submit'
             
            >
              Sign In
            </Button>
       <Box mt={5}>
         <Copyright />
       </Box>
     </form>
   </div>
 </Grid>
</Grid>

  );
}

export default withApollo({ ssr: true })(login)