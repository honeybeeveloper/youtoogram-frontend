import React from "react";
import { makeStyles } from "@mui/styles";

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            Hello~
        </div>


    );
}


const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#253280'
    }
}));

export default Header;