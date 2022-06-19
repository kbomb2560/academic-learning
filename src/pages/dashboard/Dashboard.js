import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import axios from "axios";
//import { Link } from "react-router-dom";
// styles
//import useStyles from "./styles";
//

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

import Notification from "../../components/Dialogs/Notification";

//
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import YouTubeIcon from "@material-ui/icons/YouTube";

import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import Link from "@material-ui/core/Link";

//
import { makeStyles } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import { green, pink } from "@material-ui/core/colors";
//
const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  visitsNumberContainer: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    paddingBottom: theme.spacing(1),
  },
  progressSection: {
    marginBottom: theme.spacing(1),
  },
  progressTitle: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    marginBottom: theme.spacing(1),
    backgroundColor: "rgb(236, 236, 236)",
  },
  pieChartLegendWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: theme.spacing(1),
  },
  legendItemContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tableWidget: {
    overflowX: "auto",
  },
  progressBarPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  progressBarWarning: {
    backgroundColor: theme.palette.warning.main,
  },
  performanceLegendWrapper: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  legendElement: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  legendElementText: {
    marginLeft: theme.spacing(1),
  },
  serverOverviewElement: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  serverOverviewElementText: {
    minWidth: 145,
    paddingRight: theme.spacing(2),
  },
  serverOverviewElementChartWrapper: {
    width: "100%",
  },
  mainChartBody: {
    overflowX: "auto",
  },
  mainChartHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexWrap: "wrap",
    },
  },
  mainChartHeaderLabels: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      order: 3,
      width: "100%",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  mainChartHeaderLabel: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  mainChartSelectRoot: {
    borderColor: theme.palette.text.hint + "80 !important",
  },
  mainChartSelect: {
    padding: 10,
    paddingRight: 25,
  },
  mainChartLegentElement: {
    fontSize: "18px !important",
    marginLeft: theme.spacing(1),
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: "#fff",
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: "#fff",
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
  //
  root: {
    flexGrow: 1,
    //maxWidth: 752,
  },
  // demo: {
  //   backgroundColor: theme.palette.background.paper,
  // },
  title: {
    margin: theme.spacing(4, 0, 2),
    // fontSize: 14,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  widgcolor: {
    backgroundColor: "#e91e63",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  // title: {
  //   fontSize: 14,
  // },
  loginLoader: {
    marginLeft: theme.spacing(4),
  },
  pos: {
    marginBottom: 12,
  },
}));

const TypographyPage = (props) => {
  //export default function TypographyPage() {
  var classes = useStyles();
  const [secondary, setSecondary] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLesson1, setIsLesson1] = useState(false);
  const [isLesson2, setIsLesson2] = useState(false);
  const [isLesson3, setIsLesson3] = useState(false);
  const [isLesson4, setIsLesson4] = useState(false);
  const [isLesson5, setIsLesson5] = useState(false);
  const [isLesson6, setIsLesson6] = useState(false);
  const [isLesson7, setIsLesson7] = useState(false);
  const [isLesson8, setIsLesson8] = useState(false);
  const [isLesson9, setIsLesson9] = useState(false);
  const [isLesson10, setIsLesson10] = useState(false);
  const [isLesson11, setIsLesson11] = useState(false);
  const [isLesson12, setIsLesson12] = useState(false);
  const [isLesson13, setIsLesson13] = useState(false);
  const [isLesson14, setIsLesson14] = useState(false);
  const [isPostest, setIsPostest] = useState(false);
  const [isAssessment, setIsAssessment] = useState(false);
  //const

  const [nonData, setNonData] = useState(false); //fail
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  // const bull = <span className={classes.bullet}>•</span>;

  const handleSubmitAdd = async (data) => {
    //e.preventDefault();
    //console.log("test ", data);

    var rememberMe = localStorage.getItem("dataAuth");
    //const user = rememberMe ? localStorage.getItem("dataStudent") : "";
    var studentsData = JSON.parse(rememberMe);
    var studentsFullname =
      studentsData.PREFIX_NAME +
      "" +
      studentsData.FIRST_NAME +
      " " +
      studentsData.LAST_NAME;
    var studentsSTDCODE = studentsData.STD_CODE;
    var studentsFAC_CODE = studentsData.FAC_CODE;
    var studentsFAC_NAME = studentsData.FAC_NAME;
    var studentsMAJOR_CODE = studentsData.MAJOR_CODE;
    var studentsMAJOR_NAME = studentsData.MAJOR_NAME;
    var studentsYEAR_IN = studentsData.YEAR_IN;
    var studentsGRP_NAME = studentsData.GRP_NAME;
    var studentsUSER_TYPE = studentsData.USER_TYPE;
    //setIsAddLoading(true);
    //reset();
    //return;
    const params = {
      index: data,
      std_code: studentsSTDCODE,
      std_fullname: studentsFullname,
      std_faccode: studentsFAC_CODE,
      std_facname: studentsFAC_NAME,
      std_majorcode: studentsMAJOR_CODE,
      std_majorname: studentsMAJOR_NAME,
      std_yearin: studentsYEAR_IN,
      std_grpname: studentsGRP_NAME,
      std_usertype: studentsUSER_TYPE,
    };
    try {
      //console.log(data);
      //const result = await axios.post(`end-point`,values);
      const result = await axios.post(
        `http://academic.pcru.ac.th/api2learning/std2learning-add-end.php`,
        params,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      if (result) {
        console.log("success");
        setTimeout(() => {
          setNotify({
            isOpen: true,
            message: "บันทึกข้อมูลเรียบร้อยแล้ว",
            type: "success",
          });
          //setIsAddLoading(false);
          //แจ้งบันทึก
          //
          //props.onclose();
          //props.loadRecords();
          loadCheckSTD2Learning();
        }, 1000);

        // success
        //loading false
        //error false
        //errorMsg ""
        //closePopup
        //refreshData
        //reset form
      }
    } catch (error) {
      //console.log('error');
      setNotify({
        isOpen: true,
        message: "การบันทึกข้อมูลผิดพลาดกรุณาติดต่อผู้ดูแลระบบ",
        type: "warning",
      });
      //setIsAddLoading(false);
      //loading false
      //error true
      //errorMsg "มีบางอย่างผิดพลาด"
    }
  };

  const handleListItemClick = async (event, index) => {
    setSelectedIndex(index);
    console.log(index);
    handleSubmitAdd(index);

    //
    //reset();
    //return;
    //
  };

  var rememberMe = localStorage.getItem("dataAuth");
  //const user = rememberMe ? localStorage.getItem("dataStudent") : "";
  var studentsData = JSON.parse(rememberMe);
  var studentsFullname =
    studentsData.PREFIX_NAME +
    "" +
    studentsData.FIRST_NAME +
    " " +
    studentsData.LAST_NAME;
  var stduentsMajor_anme = studentsData.MAJOR_NAME;
  var studentsSTDCODE = studentsData.STD_CODE;
  var studentsFAC_NAME = studentsData.FAC_NAME;
  //console.log(studentsData.STD_CODE);
  //console.log(studentsData.USER_TYPE);
  ///
  useEffect(() => {
    loadCheckSTD2Learning();
  }, []);
  /** */
  /** */
  const loadCheckSTD2Learning = () => {
    var rememberMeX = localStorage.getItem("dataAuth");
    //const user = rememberMe ? localStorage.getItem("dataStudent") : "";
    var studentsDataQN = JSON.parse(rememberMeX);
    const BASE_URL_QN =
      "http://academic.pcru.ac.th/api2learning/std-check2learning-end.php";
    try {
      //setError(false);
      //setIsLoading(true);
      axios
        .get(`${BASE_URL_QN}?std_code=${studentsDataQN.STD_CODE}`)
        .then(function (res) {
          //console.log(response);
          //console.log(response.data);
          if (res.data.status === true && res.data.success === 1) {
            setTimeout(() => {
              ///ตรวจสอบข้อมูลการตอบแบบสอบถาม//
              //
              //console.log("xx");
              //console.log("std_lesson1=", res.data.STD2Learning.std_lesson1);
              setIsLoading(false);
              if (res.data.STD2Learning.std_pretest === "1") {
                setIsLesson1(true);
              } else {
                setIsLesson1(false);
              }
              if (res.data.STD2Learning.std_lesson1 === "1") {
                setIsLesson2(true);
              } else {
                setIsLesson2(false);
              }
              if (res.data.STD2Learning.std_lesson2 === "1") {
                setIsLesson3(true);
              } else {
                setIsLesson3(false);
              }

              if (res.data.STD2Learning.std_lesson3 === "1") {
                setIsLesson4(true);
              } else {
                setIsLesson4(false);
              }

              if (res.data.STD2Learning.std_lesson4 === "1") {
                setIsLesson5(true);
              } else {
                setIsLesson5(false);
              }

              if (res.data.STD2Learning.std_lesson5 === "1") {
                setIsLesson6(true);
              } else {
                setIsLesson6(false);
              }

              if (res.data.STD2Learning.std_lesson6 === "1") {
                setIsLesson7(true);
              } else {
                setIsLesson7(false);
              }

              if (res.data.STD2Learning.std_lesson7 === "1") {
                setIsLesson8(true);
              } else {
                setIsLesson8(false);
              }

              if (res.data.STD2Learning.std_lesson8 === "1") {
                setIsLesson9(true);
              } else {
                setIsLesson9(false);
              }

              if (res.data.STD2Learning.std_lesson9 === "1") {
                setIsLesson10(true);
              } else {
                setIsLesson10(false);
              }

              if (res.data.STD2Learning.std_lesson10 === "1") {
                setIsLesson11(true);
              } else {
                setIsLesson11(false);
              }

              if (res.data.STD2Learning.std_lesson11 === "1") {
                setIsLesson12(true);
              } else {
                setIsLesson12(false);
              }

              if (res.data.STD2Learning.std_lesson12 === "1") {
                setIsLesson13(true);
              } else {
                setIsLesson13(false);
              }

              if (res.data.STD2Learning.std_lesson13 === "1") {
                setIsLesson14(true);
              } else {
                setIsLesson14(false);
              }

              if (res.data.STD2Learning.std_lesson14 === "1") {
                setIsPostest(true);
              } else {
                setIsPostest(false);
              }
              if (res.data.STD2Learning.std_postest === "1") {
                setIsAssessment(true);
              } else {
                setIsAssessment(false);
              }

              //-- จบส่วนของการ set ค่าให้กับตัวแปร Joi --//
              //console.log("มีข้อมูลนี้เรียนแล้ว");
              //console.log("xxx=", response.data.bunditSTD.std_code);
              //localStorage.setItem("StudentData", response.data.id.data);
              setIsError(false);
              setIsLoading(false);
              setNonData(false);
              //history.push("/app/dashboard");
            }, 1000);
          } else {
            //console.log("ไม่พบข้อมูล");
            //dispatch({ type: "LOGIN_FAILURE" });
            //setError(true);
            //setIsLoading(false);
            setIsError(false);
            setIsLoading(false);
            setNonData(false);
          }
        })
        .catch(function (error) {
          setIsError(true);
          if (error.response) {
            //console.log(error.response.headers);
          } else if (error.request) {
            //setError(true);
            //console.log(error.request);
          } else {
            //setError(true);
            //console.log("Error", error.message);
          }
        });
    } catch (error) {
      //console.log("err");
    }
  };
  //====================================
  //
  let content = (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size={30}
        className={classes.loginLoader}
        color="secondary"
      />
    </div>
  );

  if (!isLoading) {
    if (isError) {
      //content = "ไม่สามารถโหลดข้อมูลได้";
      //      console.log("eeerrrx");
      if (nonData) {
        content = (
          <Alert severity="warning">
            <AlertTitle>{"แจ้งเตือน"}</AlertTitle>
            {"ไม่พบข้อมูล!"}
          </Alert>
        );
      } else {
        content = (
          <Alert severity="error">
            <AlertTitle>{"แจ้งเตือน"}</AlertTitle>
            {"ไม่สามารถโหลดข้อมูลได้! กรุณาติดต่อผู้ดูแลระบบ!!"}
          </Alert>
        );
      }
    } else {
      content = (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Widget
              title="ข้อมูลส่วนตัว"
              disableWidgetMenu
              noWidgetShadow
              style={{ color: "red" }}
            >
              <Typography>รหัสนักศึกษา {studentsSTDCODE}</Typography>
              <Typography>ชื่อ-สกุล {studentsFullname}</Typography>
              <Typography>{studentsFAC_NAME}</Typography>
              <Typography>{stduentsMajor_anme}</Typography>
            </Widget>
          </Grid>

          <Grid item xs={12} md={12}>
            <List dense={true}>
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                component={Link}
                rel="noopener noreferrer"
                href="https://forms.gle/qteXKYDD1RbzGDkA6"
                target="_blank"
              >
                <ListItemAvatar>
                  <Avatar className={classes.green}>
                    <PostAddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="แบบทดสอบก่อนเรียน (Pre-test)"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="บทที่ 1 ข้อมูลเบื้องต้น" disableWidgetMenu>
              <Grid item xs={12}>
                <div className={classes.root}>
                  <List dense={true}>
                    <ListItem
                      button
                      selected={selectedIndex === 2}
                      onClick={(event) => handleListItemClick(event, 2)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/gyqVXqWFV4I"
                      target="_blank"
                      disabled={!isLesson1}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="ข้อมูลเบื้องต้นเกี่ยวกับการเรียนของนักศึกษาใหม่"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 3}
                      onClick={(event) => handleListItemClick(event, 3)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/W3vrIzqYrG0"
                      target="_blank"
                      disabled={!isLesson2}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การตรวจสอบคุณวุฒิการศึกษาเดิม"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 4}
                      onClick={(event) => handleListItemClick(event, 4)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/_SWIrnKXPLw"
                      target="_blank"
                      disabled={!isLesson3}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="ทุนอุดหนุนการศึกษา"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="บทที่ 2 การใช้ระบบสารสนเทศ" disableWidgetMenu>
              <Grid item xs={12}>
                <div className={classes.root}>
                  <List dense={true}>
                    <ListItem
                      button
                      selected={selectedIndex === 5}
                      onClick={(event) => handleListItemClick(event, 5)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/HKJ2AUmGEMQ"
                      target="_blank"
                      disabled={!isLesson4}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="แนะนำเว็บไซต์สำนักส่งเสริมวิชาการและงานทะเบียน"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 6}
                      onClick={(event) => handleListItemClick(event, 6)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/MfUAGFuLDa0"
                      target="_blank"
                      disabled={!isLesson5}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="แนะนำการใช้ระบบทะเบียนและวัดผลนักศึกษา"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="บทที่ 3 การลงทะเบียนรายวิชาเรียน" disableWidgetMenu>
              <Grid item xs={12}>
                <div className={classes.root}>
                  <List dense={true}>
                    <ListItem
                      button
                      selected={selectedIndex === 7}
                      onClick={(event) => handleListItemClick(event, 7)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/Is2mrR6bRIE"
                      target="_blank"
                      disabled={!isLesson6}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การยกเว้นรายวิชาและการโอนผลการเรียน"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 8}
                      onClick={(event) => handleListItemClick(event, 8)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/SSUgAwnLf7k"
                      target="_blank"
                      disabled={!isLesson7}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การเปิดรายวิชาเป็นกรณีพิเศษ/การเพิ่ม-ถอนรายวิชา/การยกเลิกรายวิชา"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget
              title="บทที่ 4 ผลการเรียนและการสำเร็จการศึกษา"
              disableWidgetMenu
            >
              <Grid item xs={12}>
                <div className={classes.root}>
                  <List dense={true}>
                    <ListItem
                      button
                      selected={selectedIndex === 9}
                      onClick={(event) => handleListItemClick(event, 9)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/jkaD40aag3o"
                      target="_blank"
                      disabled={!isLesson8}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การตรวจสอบผลการเรียนและพ้นสภาพวัดผลทางทะเบียน"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 10}
                      onClick={(event) => handleListItemClick(event, 10)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/q-STa6ZagUc"
                      target="_blank"
                      disabled={!isLesson9}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การสำเร็จการศึกษาและการได้รับเกียรตินิยม"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 11}
                      onClick={(event) => handleListItemClick(event, 11)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/10IpK9EPhas"
                      target="_blank"
                      disabled={!isLesson10}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="เวลาเรียนและการขาดสอบปลายภาค"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="บทที่ 5 คำร้องต่าง ๆ ด้านวิชาการ" disableWidgetMenu>
              <Grid item xs={12}>
                <div className={classes.root}>
                  <List dense={true}>
                    <ListItem
                      button
                      selected={selectedIndex === 12}
                      onClick={(event) => handleListItemClick(event, 12)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/gKrBgFd6_bc"
                      target="_blank"
                      disabled={!isLesson11}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การพักการเรียนและการคืนสถาพนักศึกษา
                      (การขอลาพักการศึกษา/การขอรักษาสถานภาพการเป็นนักศึกษา/การขอคืนสถานภาพการเป็นนักศึกษา)"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 13}
                      onClick={(event) => handleListItemClick(event, 13)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/azUXe6W9WIM"
                      target="_blank"
                      disabled={!isLesson12}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การขอใบรับรองและใบรายงานผลการเรียน
                      (การขอใบรับรองการเป็นนักศึกษา/ ใบรายงานผลการเรียน)"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 14}
                      onClick={(event) => handleListItemClick(event, 14)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/6YAnsi7NoBY"
                      target="_blank"
                      disabled={!isLesson13}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การย้ายและการลาออก (การย้ายสาขาวิชา/การย้ายภาค (จากปกติไป
                        กศ.ปช.)/การย้ายสถานศึกษา/การลาออก)"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                    <ListItem
                      button
                      selected={selectedIndex === 15}
                      onClick={(event) => handleListItemClick(event, 15)}
                      component={Link}
                      rel="noopener noreferrer"
                      href="https://youtu.be/e-ggdaVydZY"
                      target="_blank"
                      disabled={!isLesson14}
                    >
                      <ListItemAvatar>
                        <Avatar className={classes.pink}>
                          <YouTubeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="การเปลี่ยนชื่อ - สกุล (การเปลี่ยนชื่อ-สกุล ยศ)"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={12}>
            <List dense={true}>
              <ListItem
                button
                selected={selectedIndex === 16}
                onClick={(event) => handleListItemClick(event, 16)}
                component={Link}
                rel="noopener noreferrer"
                href="https://forms.gle/LH8jmqnF765dvvwQA"
                target="_blank"
                disabled={!isPostest}
              >
                <ListItemAvatar>
                  <Avatar className={classes.green}>
                    <AssignmentIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="แบบทดสอบหลังเรียน (Post-test)"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={12}>
            <List dense={true}>
              <ListItem
                button
                selected={selectedIndex === 17}
                onClick={(event) => handleListItemClick(event, 17)}
                component={Link}
                rel="noopener noreferrer"
                href="https://forms.gle/2RdXtrniEH6LChJA7"
                target="_blank"
                disabled={!isAssessment}
              >
                <ListItemAvatar>
                  <Avatar className={classes.pink}>
                    <LibraryAddCheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="แบบประเมินความพึงพอใจ"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      );
    }
  }
  return (
    <>
      <PageTitle title="บทเรียนออนไลน์" />
      {content}

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};
export default TypographyPage;
