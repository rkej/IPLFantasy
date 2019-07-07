import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class NavBar extends Component {

    render() {
        const BootstrapButton = withStyles({
            root: {
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 16,
                lineHeight: 1.5,
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),

                '&:active': {
                    boxShadow: 'none',
                },

            },
        })(Button);
        const theme = createMuiTheme({
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#4a148c',
                    dark: '#001064',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ffd470',
                    main: '#f4a340',
                    dark: '#bd7406',
                    contrastText: '#000',
                },
            },
        })
        const { classes } = this.props;
        return <ThemeProvider theme={theme}> <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        IPL Fantasy Web-App
          </Typography>
                    <BootstrapButton varant = "extended" color="inherit" className={classes.menuButton} disableRipple><PersonOutlineIcon/>&nbsp;&nbsp;Login</BootstrapButton>
                    <BootstrapButton color="inherit" className={classes.menuButton} disableRipple><PersonAddIcon/>&nbsp;&nbsp;Register</BootstrapButton>
                </Toolbar>
            </AppBar>
        </div>
        </ThemeProvider>
    }
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NavBar);

