import { makeStyles } from "@mui/styles";

export default makeStyles(()=>({
    title : {
        color:"red",
        textDecoration:"none",
    },
    nav:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }
    ,
    navlink:{
        textDecoration:"none",
        color:"black",   
    },
    section:{
        width:"90%",
        display:"flex",
        justifyContent:"space-between"
    }
}));