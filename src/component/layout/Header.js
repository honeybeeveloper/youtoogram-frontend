import React from "react";
import makeStyles from "@mui"

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
        backgroundColor: theme.base.headerColor
    }
}));

export default Header;