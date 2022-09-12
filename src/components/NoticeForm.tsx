import React,{useState,useEffect,useRef,useCallback} from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from 'formik-material-ui';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from '../../lib/withApolloData'
import Typography from '@material-ui/core/Typography';
import CREATE_NOTICE from '../graphql/mutation/createNotice'

import { Field,Formik,Form } from "formik";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   formContainer:{
    width:"90%",
    marginTop:"2rem",
    marginRight:'5%',
    marginLeft:'5%',
    
   },

   bodyField:{
     marginTop:"2rem",
     marginBottom:"1rem",
     width:"100%"
   },
 
  }),
);


const NoticeForm = () => {
 
  const [createNotice,{data}] = useMutation(CREATE_NOTICE)
  const [route,setRoute] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    if(route){
      Router.reload();
    }
   
  });
  
  interface Values {
     body:string
     createdAt:string | null
     _id:string
    } 

  return (
    <Formik
      initialValues={{
       body: ''
      }}
      validate={values => {
        console.log('value',values)
        const errors: Partial<Values> = {};
        if (!values.body) {
          errors.body = '入力必須です';
        } 
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }
        ) => {
        try {
          event.preventDefault();
             await createNotice({
              variables:{body:values.body}}),
            toast.success('お知らせが作成されました');
            Router.reload();
             setSubmitting(false)
        } catch (error) {
          toast.error('サーバーエラーのためデータ送信できませんでした');
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className={classes.formContainer}>
    
     <Typography style={{color:"#fff",fontSize:"23px"}}>お知らせの作成</Typography>
          <Field
            className={classes.bodyField}
            component={TextField}
            type="text"
            label="お知らせ内容"
            name="body"
            variant="outlined"
            margin="normal"
            multiline={true}
            rows={10}
            required
            fullWidth
          />
     <br />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
// export default NoticeForm
export default withApollo({ssr:true})(NoticeForm)