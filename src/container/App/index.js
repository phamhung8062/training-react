import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import theme from '../../commons/Theme';
import GolbalLoading from '../../components/GolbalLoading';
import ModalTask from '../../components/Modal';
import { ADMIN_ROUTERS, ROUTERS } from '../../constants/index';
import configureStore, { history } from '../../redux/configStore';
import styles from './styles';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import DefaultLayoutRoute from '../../commons/Layout/DefaultLayoutRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ConnectedRouter } from 'connected-react-router';
const store = configureStore();
class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTERS.map((route) => {
      return (
        <AdminLayoutRoute
          path={route.path}
          key={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };

  renderDefaultRoutes = () => {
    let xhtml = null;
    xhtml = ROUTERS.map((route) => {
      return (
        <DefaultLayoutRoute
          path={route.path}
          key={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <Provider store={store}>
        {/* // <BrowserRouter> */}
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <GolbalLoading />
            <CssBaseline />
            <ToastContainer />
            <Switch>
              {this.renderDefaultRoutes()}
              {this.renderAdminRoutes()}
            </Switch>
            <ModalTask />
          </ThemeProvider>
        </ConnectedRouter>
        {/* </BrowserRouter> */}
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
