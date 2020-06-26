const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    position: 'relative',
    height: '100%',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.color.hover,
    },
  },
});
export default styles;
