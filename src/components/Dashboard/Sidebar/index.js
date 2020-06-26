import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTERS_MENU } from '../../../constants/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onTogleSidebar } = this.props;
    if (onTogleSidebar) {
      onTogleSidebar(value);
    }
  };

  renderList = () => {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTERS_MENU.map((item) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                <ListItem key={item.path} className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onTogleSidebar: PropTypes.func,
};
export default withStyles(styles)(Sidebar);
