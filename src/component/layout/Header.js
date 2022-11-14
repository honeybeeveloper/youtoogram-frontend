import React from "react";
import { makeStyles } from "@mui/styles";
import { TextField, IconButton, InputAdornment  } from "@mui/material";
import { Search } from "@mui/icons-material"


function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.headerDiv}>
                <div className={classes.titleDiv}>
                    <label className={classes.title} >You too, gram</label>
                </div>
                <div className={classes.textFieldDiv}>
                    <TextField 
                        className={classes.textField}
                        id="textField" 
                        variant="outlined" 
                        InputProps={{
                            sx: { width: 240, height: 30, paddingLeft: 0 },
                            className: classes.textFieldInput,
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton className={classes.textFieldIcon}>
                                  <Search />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        
                        />
                </div>
                <div></div>
            </div>
        </div>
    );
}


const useStyles = makeStyles(theme => ({
    root: {
        height: theme.base.header.height,
        backgroundColor: theme.base.header.headerColor,
    },
    headerDiv: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
    },
    titleDiv: {
        display: "flex",
        alignItems: "center",
        width: theme.spacing(30)
    },
    title: {
        fontSize: theme.spacing(3),
        fontWeight: "bold"
    },
    textFieldDiv: {
        display: "flex",
        alignItems: "center",
        width: theme.spacing(30),
    },
    textField: {
    },
    textFieldInput: {
    },
    textFieldIcon: {
        color: theme.overrides.MuiIconButton.colorPrimary.color
    }
}));

export default Header;