import React from "react";
import { TextField, IconButton, InputAdornment  } from "@mui/material";
import { Search } from "@mui/icons-material"
import StyledTheme from "../theme/StyledTheme";


function Header() {

    return (
        <div style={useStyles.root}>
            <div style={useStyles.headerDiv}>
                <div style={useStyles.titleDiv}>
                    <label style={useStyles.title} >You too, gram</label>
                </div>
                <div style={useStyles.textFieldDiv}>
                    <TextField 
                        style={useStyles.textField}
                        id="textField" 
                        variant="outlined" 
                        InputProps={{
                            sx: { width: 240, height: 30, paddingLeft: 0 },
                            style: useStyles.textFieldInput,
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton style={useStyles.textFieldIcon}>
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



const useStyles = {
    root: {
        height: StyledTheme.base.header.height,
        backgroundColor: StyledTheme.base.header.headerColor,
    },
    headerDiv: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
    },
    titleDiv: {
        display: "flex",
        alignItems: "center",
        width: StyledTheme.spacing * 30,
    },
    title: {
        fontSize: StyledTheme.spacing * 3,
        fontWeight: "bold"
    },
    textFieldDiv: {
        display: "flex",
        alignItems: "center",
        width: StyledTheme.spacing * 30,
    },
    textField: {
    },
    textFieldInput: {
    },
    textFieldIcon: {
        color: StyledTheme.muiTheme.overrides.MuiIconButton.colorPrimary.color
    }
};

export default Header;