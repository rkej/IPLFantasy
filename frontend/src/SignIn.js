import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ThemeProvider } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class SignIn extends Component {
    render() {
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
        const cardstyle = withStyles({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
              },
              textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
              },
              dense: {
                marginTop: theme.spacing(2),
              },
            card: {
                minWidth: 275,
            },
            bullet: {
                display: 'inline-block',
                margin: '0 2px',
                transform: 'scale(0.8)',
            },
            title: {
                fontSize: 14,
            },
            pos: {
                marginBottom: 12,
            },
        });
        
        const { classes } = this.props;
        return <ThemeProvider theme={theme}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">Sign in</Typography>
                    <form className={classes.container}>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                </CardContent>
                <CardActions>
                    <Button size = "small" color = "primary">Sign in</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    }
}
export default withStyles()(SignIn);

