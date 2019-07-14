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

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
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

class Register extends Component {
    render() {
        const { classes } = this.props;
        return <div> <ThemeProvider theme={theme}>
            <App /> <br></br><br></br> <Card className={classes.card} style={{ width: '40%', verticalAlign: 'center', margin: 'auto', padding: 10, display: 'block', backgroundColor: '#ff6e40', horizontalAlign: 'center' }}>
                <Typography variant="h5" component="h2" style={{ color: "#1a237e", paddingLeft: 10 }}>Register</Typography>

                <form className={classes.container}>
                    <TextField
                        style={{ backgroundColor: "white" }}
                        id="outlined-firstName-input"
                        label="First Name"
                        className={classes.textField}
                        name="firstName"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        style={{ backgroundColor: "white" }}
                        id="outlined-lastName-input"
                        label="Last Name"
                        className={classes.textField}
                        name="lastName"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        style={{ backgroundColor: "white"}}
                        id="outlined-teamName-input"
                        label="Enter your Team Name"
                        className={classes.textField}
                        name="teamName"
                        margin="normal"
                        variant="filled"
                        fullWidth="true"
                    />
                    <TextField
                        style={{ backgroundColor: "white" }}
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
                        style={{ backgroundColor: "white", paddingRight: 10 }}
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="filled"
                        fullWidth="true"
                    />
                    <Button style={{ paddingLeft: 10, margin: 'auto', color: '#1a237e' }}>Register</Button>
                </form>
            </Card>
        </ThemeProvider>
        </div>
    }
}
Register.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Register);

