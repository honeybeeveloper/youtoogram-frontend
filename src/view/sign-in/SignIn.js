import React, { useState } from "react";
import StyledTheme from "../../component/theme/StyledTheme";
import StyledTextField from "../../component/textfield/StyledTextField";
import StyledButton from "../../component/button/StyledButton";
import { Alert, Collapse, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material"


function SignIn() {
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const handleOnClick = () => {
        if (!userId){
            setShowAlert(true)
            setAlertText('아이디를 입력해주세요.')
            return
        }
        if (!password){
            setShowAlert(true)
            setAlertText('비밀번호를 입력해주세요.')
            return
        }

        // sign-in
        const signInData = {userId: userId, password: password}
        runSignIn(signInData)
    };

    const runSignIn = (data) => {
        // TODO : with axio
        console.log(data.userId, data.password)
    }


    return (
        <div style={useStyles.root}>
            <div style={useStyles.sideDiv}>Left</div>
            <div style={useStyles.contents}>
                <div>
                    <div style={useStyles.alertDiv}>
                        <Collapse in={showAlert}>
                            <Alert
                                    style={useStyles.alert}
                                    severity="error"
                                    action={<IconButton
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    setShowAlert(false);
                                                }}
                                                >
                                                <Close fontSize="inherit" />
                                            </IconButton>}
                            >{alertText}</Alert>
                        </Collapse>
                    </div>
                    <div style={useStyles.titleDiv}>
                        <label style={useStyles.title}>
                            {'너도 할 수 있어!'}<br />{'You too, gram'}
                        </label>
                    </div>
                </div>
                <div style={useStyles.inputsDiv}>
                    <StyledTextField inputLabel={'아이디'} handleTextField={setUserId} />
                    <StyledTextField inputLabel={'비밀번호'} handleTextField={setPassword}/>
                    <StyledButton name={'로그인'} onClick={handleOnClick} />
                </div>
                <div style={useStyles.signupDiv}>
                    <label>아직 회원이 아니신가요?</label>
                    <label>회원가입</label>
                </div>
            </div>
            <div style={useStyles.sideDiv}>Right</div>
        </div>
    )
}

const useStyles = {
    root: {
        display: 'flex',
        height: '100vh',
    },
    sideDiv: {
        width: `${StyledTheme.variables.sideWidth}vw`,
    },
    contents: {
        width:  `calc(100vw - ${StyledTheme.variables.sideWidth}vw * 2)`,
    },
    alertDiv: {
        display: 'flex',
        justifyContent: 'center',
        height: '5vh',
    }, 
    alert: {
        width: '30vw',
        fontWeight: 'bold',
    },
    titleDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        height: '35vh'
    },
    title: {
        fontWeight: "bolder",
        fontSize: StyledTheme.spacing * 10,
    },
    inputsDiv: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: '30vh',
    },
    signupDiv: {
        display: 'flex',
        justifyContent: 'center',
        height: '30vh',
    }
};

export default SignIn;