import React,{useEffect,useState} from 'react';
import {Router} from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import Theme from '../src/ui/Theme';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import {Ball} from '../src/components/Ball'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { AnimatePresence } from 'framer-motion';
import { useTransition } from "../src/components/useTranstion";
import "./styles.scss"


// if (!window.GA_INTIALIZED) {
//   initGA()
//   window.GA_INTIALIZED = true
// }
const App = (props:any):JSX.Element => {
  const transitionCallback = useTransition();

  //
  useEffect(() => {
   
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }


    
  }, []);

  

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

    const { Component, pageProps,router,location} = props;
    // const router = useRouter();
    return (
      <React.Fragment>
       {loading ? (
         <div className="loading">
       <Ball/>
       </div>
      ) :(
        
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AnimatePresence initial={true} exitBeforeEnter onExitComplete={transitionCallback}>

         {/* <Component {...pageProps}  location={location}key={router.route} /> */}

         <Component {...pageProps} location={location}key={router.route}/>
        
         </AnimatePresence>
         <ToastContainer
           position='top-right'
           autoClose={2000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           draggable
           pauseOnHover
         />
  </ThemeProvider>)}
 

      </React.Fragment>
    );
  }

export default App;