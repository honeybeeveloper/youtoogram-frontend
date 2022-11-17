import React from "react";
import { Button }  from '@mui/material'
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";

function StyledButton(props){
  const { name, onClick } = props

  return (
    <Button variant="contained" sx={useStyles.button} onClick={onClick}>
        <label style={useStyles.label}>{name}</label>
    </Button>
  )
}

StyledButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const useStyles = {
    button: {
        backgroundColor: StyledTheme.base.button.backgroundColor,
        '&:hover': {
            backgroundColor: StyledTheme.base.button.hoverButtonColor,
        },
    },
    label: {
        fontSize: StyledTheme.base.button.labelSize,
        color: StyledTheme.base.button.labelColor,
        fontWeight: "bold",
    }
}

export default StyledButton;