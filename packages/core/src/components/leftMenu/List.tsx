import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
              <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default withStyles(styles)(SimpleList);