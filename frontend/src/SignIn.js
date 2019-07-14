import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, withTheme } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import App from './App';

const styles = theme=>({
    root: {
        flexGrow: 1,
    },
    card:{
        minWidth: 275,
    },

    title: {
        flexGrow: 1,
    },
    textField: {
        color: 'white',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      
});

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

class SignIn extends Component {
    render() {
        const { classes } = this.props;
        return<div> <ThemeProvider theme={theme}>
            <App/> <br></br><br></br> <Card className={classes.card} style={{width:'30%', verticalAlign: 'center', margin: 'auto', padding: 10, display:'block', backgroundColor: '#ff6e40', horizontalAlign: 'center'}}>
                    <Typography variant="h5" component="h2" style={{color: "#1a237e", paddingLeft: 10}}>Sign In</Typography>

                    <form className={classes.container}>
                        <TextField
                        required
                            style={{backgroundColor: "white"}}
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="filled"
                            fullWidth="true"
                        />
                        <TextField
                        required
                        style={{backgroundColor: "white"}}
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="filled"
                            fullWidth="true"
                        />
                    <Button size = "small" color = "primary" style={{paddingLeft:10, margin:'auto'}}>SIGN IN</Button>
                    </form>
                    </Card>
        </ThemeProvider>
        </div>
    }
}
SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SignIn);

