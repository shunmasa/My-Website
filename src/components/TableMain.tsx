import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Button, IconButton, Typography } from '@material-ui/core';
// import Edit from "@material-ui/icons/Edit";
// import DialogEdit from './DialogEdit'
import DialogForm from '../../pages/dashboard/[dashboard]'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withApollo } from '../../lib/withApolloData'
import moment from "moment";
import {useRouter} from 'next/router';
import Router from 'next/router';
// import { toast } from 'react-toastify';
// import Router from 'next/router';
import Loader from './Loading'
import DELETE_POST from '../graphql/mutation/deletePost';
import GET_SOMEPOSTS from '../graphql/query/somePosts';
import { useMutation,useQuery} from '@apollo/react-hooks';
import Edit from "@material-ui/icons/Edit";
import { divide } from 'lodash';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));





const TableMain = ():any => {
  const [deletePost] = useMutation(DELETE_POST)
  const [open, setOpen] = React.useState(false);
  const [route,setRoute] = useState(false);

  const { data, error,loading,fetchMore } = useQuery(
    GET_SOMEPOSTS
  );
  let message = 'Notices';
  if (loading) message = 'Loading...';
  if (error) message = `Error! ${error}`;
  // if (data && data.somePosts.length <= 0) message = 'No Posts';
 
  useEffect(() => {
    if(route){
      Router.reload();
    }
   
  });

  console.log('data',data)



const fetchMoreData = () =>{
const {endCursor} = data.somePosts.pageInfo;
 console.log("end",endCursor)
fetchMore({
variables:{after:endCursor},
updateQuery:(previousResult,{fetchMoreResult})=>{
// console.log(prevResult);// console.log(fetchMoreResult)
const newEdges = fetchMoreResult.somePosts.edges;
const pageInfo = fetchMoreResult.somePosts.pageInfo;
const totalCount = fetchMoreResult.somePosts.totalCount;

// return newEdges.length
// return pageInfo.hasNextPage
return newEdges.length
? {
   // Put the new comments at the end of the list and update `pageInfo`
   // so we have the new `endCursor` and `hasNextPage` values
   somePosts: {
     __typename: previousResult.somePosts.__typename,
     edges: [...previousResult.somePosts.edges, ...newEdges],
     pageInfo,
     totalCount
   }
 }
: previousResult;


      }
    })
  }





  const handleClickOpen = () => {

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const ReadLimit = ({ children, maxCharacter = 25 }) => {
    const text = children;
    const resultString = text.slice(0, maxCharacter);

    return (
    <div>
        {resultString}
        {/* <Button onClick={e => toggleIsShrinked(e)}>
        {isShrinked ? "Read More" : "Read Less"} 
        </Button> */}
   </div>
    );
  };


const router = useRouter();
console.log('router',router.query.postUrl)
  const classes = useStyles();
  return (
    <React.Fragment>

      <Title>みんなの留学体験談</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>投稿日</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>投稿タイトル</TableCell>
            <TableCell　align="center">内容</TableCell>
            <TableCell>更新</TableCell>
            <TableCell>削除</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
    
        {loading ? (
         <Loader/>
         
      ) : (
            data &&
              data.somePosts &&
              data.somePosts.edges.map(({ node: somePost },i) => ( 
            <TableRow key={i}>
              <TableCell>{moment(somePost.createdAt).format("YYYY/MM/DD")}</TableCell>
              <TableCell>{somePost.username}</TableCell>
              <TableCell>{somePost.postTitle}</TableCell>
              <TableCell><ReadLimit>{somePost.description}</ReadLimit></TableCell>
                <TableCell>
                
                {/* <DialogEdit open={open} somePost={somePost} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
           */}
                <Link href={`/dashboard/[dashboard]?dashboard=${somePost._id}`} as={`/dashboard/${somePost._id}`}>
             {/* <IconButton color="primary" onClick={handleClickOpen}> */}
             <IconButton color="primary" onClick={handleClickOpen}>
           <Edit fontSize="small"style={{color:"#427bf5",height:"2rem",width:"1.8rem",marginLeft:"-.5em"}} />
         </IconButton>
           </Link>
     
            </TableCell>
             <TableCell>   
            <IconButton onClick={()=>{deletePost({variables:{_id:somePost._id}}),setRoute(!route)}}>  
            <DeleteForeverIcon style={{color:"red",height:"2rem",width:"1.8rem",marginLeft:"-.5em"}}/>
          
          </IconButton>
        </TableCell>
            </TableRow>
             ))
          )}
        </TableBody>
      </Table>

      {data && data.somePosts.pageInfo.hasNextPage ?
      <div className={classes.seeMore}>
      <button onClick={fetchMoreData}>More</button>
      </div>:<div className={classes.seeMore}>
      <button>No More Data</button>
      </div>
}
    </React.Fragment>
  );
}


export default withApollo({ ssr: true })(TableMain)