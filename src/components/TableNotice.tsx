import React,{useState,useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button, IconButton, Typography } from '@material-ui/core';
import moment from 'moment'
// import Edit from "@material-ui/icons/Edit";
// import DialogEdit from './DialogEdit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withApollo } from '../../lib/withApolloData'
import { toast } from 'react-toastify';
import Router from 'next/router';
import DELETE_NOTICE from '../graphql/mutation/deleteNotice'
import Loading from './Loading'
import GET_NOTICES from '../graphql/query/notices'
import { useMutation,useQuery} from '@apollo/react-hooks';
import notice from '../../pages/notice';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


// interface Data {
//   users: [Notices];
// }
const TableNotice = () => {
  const [deleteNotice] = useMutation(DELETE_NOTICE)
  const [route,setRoute] = useState(false);

  const [isShrinked, setIsShrinked] = useState(true);
  const [open, setOpen] = React.useState(false);
  const {data, error, loading, refetch  } = useQuery(
    GET_NOTICES
  );
  let message = 'Notices';
  if (loading) message = 'Loading...';
  if (error) message = `Error! ${error}`;
  if (data && data.notices.length <= 0) message = 'お知らせは今のところありません';
 
 

  useEffect(() => {
    if(route){
      Router.reload();
    }
   
  });


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ReadLimit = ({ children, maxCharacter = 200 }) => {
    const text = children;
    const resultString = text.slice(0, maxCharacter);

  
    return (
      <TableCell align="center">
        {resultString}
        </TableCell>
    );
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>お知らせボード</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>投稿日</TableCell>

            <TableCell　align="center">内容</TableCell>
            <TableCell></TableCell>
            <TableCell>削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {loading ? (
          <Typography>お知らせを読み込中です</Typography>
         
      ) : (
        data &&
        data.notices.map((n) => (
          <TableRow key={n._id} data-id={n._id}>
            <TableCell> {moment(n.createdAt).format("YYYY/MM/DD")}</TableCell>
            <TableCell>{n.body}</TableCell>
              <TableCell>
              {/* <DialogEdit open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/> */}
          </TableCell>
           <TableCell>   
          <IconButton onClick={()=>{deleteNotice({variables:{_id:n._id}}),setRoute(!route)}}>  
          <DeleteForeverIcon style={{color:"red",height:"2.5rem",width:"2.5rem",marginLeft:"-.5em"}}/>
        </IconButton>
      </TableCell>
          </TableRow>

          
           
        ))
      )}
          
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" >
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}

// export default TableNotice
export default withApollo({ ssr: true })(TableNotice)