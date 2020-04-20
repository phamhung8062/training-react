import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  color: {
    primary: '#1976D2',
    secondary: '#E040FB',
    error: '#FF5722',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    borderColor: '#cccccc',
    borderRadius: 4,
  },
});
export default theme;
