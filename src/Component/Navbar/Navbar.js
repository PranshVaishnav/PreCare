import React from 'react'
import { Typography, AppBar, Toolbar, Container, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Login/login';
import LogoutButton from '../Logout/logout';
import useStyles from './styles';
function Navbar() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    const classes = useStyles();
    return (
        <AppBar style={{ background: '#000000', width: "100%" }} position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <div className={classes.section}>
                        <div className={classes.nav}>
                            <div><Typography variant="h6" component={Link} to='/' className={classes.title}  sx={{fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: "bold", fontSize: "3.5vh" }}>PRECARE</Typography></div>
                            <div><Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/'  >Home </Typography></div>
                            <div><Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/movies'  >Symptoms </Typography></div>
                            <div><Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/series'  >Disease </Typography></div>
                            <div><Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/popular' >Doctor </Typography></div>
                            <div><Typography className={classes.navlink} variant="h6" component={Link} sx={{ fontSize: "2.4vh", margin: "0 2vw 0 2vw", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} to='/trend'  > Guidelines </Typography></div>
                        </div>

                        <div className={classes.nav}>
                           <div> {isAuthenticated && (
                              <Avatar alt="avatar" src={user.picture} style={{margin:"0 2vw 0 0"}} />
                            )}
                            </div>
                            <div>
                            {isAuthenticated ? <LogoutButton/> : <LoginButton />}</div>
                        </div>
                    </div>

                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar