import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";


function StyledTextField(props) {
    const {id, inputLabel, width} = props

    return (
        <span style={useStyles.root}>
            <TextField
                style={useStyles.textField}
                id={id}
                InputProps={{
                    style: {width: width},
                    startAdornment: (
                    <InputAdornment position="start">
                        <label style={useStyles.textFieldInput}>{inputLabel}</label>
                    </InputAdornment>
                    ),
                }}
            
            />
        </span>
    )
}

StyledTextField.prototype = {
    id: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
}

const useStyles = {
    root:{
        height: 0,
    },
    textField: {
        width: '100%',
    },
    textFieldInput: {
        paddingRight: StyledTheme.spacing,
        fontWeight: 'bold',
        color: '#9f9fc1',
    },
};

export default StyledTextField;