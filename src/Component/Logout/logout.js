import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button,Typography } from "@mui/material";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" align="center" size="small" onClick={() => logout({ returnTo: window.location.origin })}>
       <Typography variant="h6" sx={{ fontSize: "2.4vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} noWrap >LOG OUT </Typography>
    </Button>
  );
};

export default LogoutButton;