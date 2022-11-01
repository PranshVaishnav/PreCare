import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button,Typography } from "@mui/material";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="contained" align="center" size="small" onClick={() => loginWithRedirect()} >
                            <Typography variant="h6" sx={{ fontSize: "2.4vh", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif" }} noWrap >LOG IN </Typography>
  </Button>;
};

export default LoginButton;