import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
  Container,
  Paper,
  Avatar,
  CssBaseline,
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
//import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logopng.png";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  //var [activeTabId, setActiveTabId] = useState(0);
  //var [nameValue, setNameValue] = useState("");
  //var [loginValue, setLoginValue] = useState("admin@flatlogic.com"); //user email
  //var [passwordValue, setPasswordValue] = useState("password"); //password

  var [loginValue, setLoginValue] = useState("653004"); //user email
  var [passwordValue, setPasswordValue] = useState("b@mb"); //password

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Container
        component={Paper}
        elevation={5}
        maxWidth="xs"
        className={classes.container}
      >
        <div className={classes.div}>
          <Typography variant="h5" className={classes.greeting}>
            “การให้ความรู้เกี่ยวกับระบบสารสนเทศ กฎ ระเบียบ ข้อบังคับ
            และแนวปฏิบัติสำหรับ นักศึกษาใหม่ ประจำปีการศึกษา 2565”
            <br />
            รูปแบบบทเรียนออนไลน์
          </Typography>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <React.Fragment>
            <Typography variant="h1" className={classes.greeting}>
              เข้าระบบ
            </Typography>
            <Fade in={error}>
              <Typography color="secondary" className={classes.errorMessage}>
                ข้อมูลผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง
              </Typography>
            </Fade>
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              margin="normal"
              placeholder="Email Adress"
              type="email"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.formButtons}>
              {isLoading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disabled={
                    loginValue.length === 0 || passwordValue.length === 0
                  }
                  onClick={() =>
                    loginUser(
                      userDispatch,
                      loginValue,
                      passwordValue,
                      props.history,
                      setIsLoading,
                      setError,
                    )
                  }
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  เข้าสู่ระบบ
                </Button>
              )}
            </div>
          </React.Fragment>

          <Typography color="primary" className={classes.copyright}>
            © 2022-{new Date().getFullYear()} , สสว. All rights reserved.
          </Typography>
        </div>
      </Container>
    </Grid>
  );
}

export default withRouter(Login);
