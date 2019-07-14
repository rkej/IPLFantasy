import React,{Component} from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import NavBar from './NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './SignIn';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a237e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd470',
      main: '#f4a340',
      dark: '#bd7406',
      contrastText: '#000',
    },
    background: {
      default: "#212121"
    }
  },
})
class App extends Component{
  render(){
    return <div>
        <MuiThemeProvider theme={theme}>
          <NavBar />
    <CssBaseline />
    </MuiThemeProvider>
    </div>
}
}
export default App;
