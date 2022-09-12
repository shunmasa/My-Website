import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import Link from 'next/link'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
//   props:()=>void;
// }
const MainListItems = ({handleLogout}) =>{

  
 return (
<div>
<List>
    <ListItem button>
      <ListItemIcon>
      <Link href="dashboard">
        <DashboardIcon />
        </Link>
      </ListItemIcon>
      <Link href="dashboard">
      <ListItemText primary="ダッシュボード" />
      </Link>
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
      <Link href="/form">
        <AssignmentIcon />
        </Link>
      </ListItemIcon>
      <Link href="/form">
      <ListItemText primary="ポストの作成" />
     </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
      <Link href="/notice">
        <NotificationsNoneIcon />
        </Link>
      </ListItemIcon>
      <Link href="/notice">
      <ListItemText primary="お知らせの作成" />
     </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link href="/">
        <HomeIcon />
        </Link>
      </ListItemIcon>
      <Link href="/">
      <ListItemText primary="ホームページ" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon onClick={handleLogout}/>
      </ListItemIcon>
      <ListItemText primary="ログアウト" onClick={handleLogout}/>
    </ListItem>
  
  </List>
  </div>
 )
  
};
export default MainListItems