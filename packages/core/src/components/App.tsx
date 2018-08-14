import * as React from 'react';
import {withStyles, createStyles, Theme} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom'
import withTheme from '../withTheme';
import LeftMenu from './leftMenu/LeftMenu';
import App1 from 'app1';
import App2 from 'app2';

interface AppProps {
  classes: any;
  theme: any;
};

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component<AppProps, {}> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <LeftMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={() => <App1 title="Service 1"/>} />
              <Route path="/about" component={() => <App2 title="Service 2" />} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default withTheme(withStyles(styles, { withTheme: true })(App));
