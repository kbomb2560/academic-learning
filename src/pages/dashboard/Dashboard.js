import React, { useState } from "react";
import { Grid } from "@material-ui/core";
//import { Link } from "react-router-dom";
// styles
import useStyles from "./styles";
//
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

//import { makeStyles } from "@material-ui/core/styles";

//import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  Event as EventIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";

//
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { green, pink } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";

//
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import CodeIcon from "@material-ui/icons/Code";
import Alert from "@material-ui/lab/Alert";

//

const vdo_list = [
  {
    id: 7,
    label: "Library",
    link: "/app/xml",
    icon: <LibraryIcon />,
  },
  {
    id: 8,
    label: "Support",
    link: "/app/xyz",
    icon: <SupportIcon />,
  },
  {
    id: 9,
    label: "FAQ",
    link: "/app/abc",
    icon: <FAQIcon />,
  },
];

export default function TypographyPage() {
  var classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  // const bull = <span className={classes.bullet}>•</span>;

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(index);
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

  return (
    <>
      <PageTitle title="บทเรียนออนไลน์" />
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
              href="http://academic.pcru.ac.th"
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
                    href="https://drive.google.com/file/d/1pH2QBBhznXaMGHOeJkWCdKI_9r9yi0HY/view?usp=sharing"
                    target="_blank"
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
                    href="https://drive.google.com/file/d/17YqeJaM5HVi42Gbv_CQ-12hafD9nxGVU/view?usp=sharing"
                    target="_blank"
                  >
                    <ListItemAvatar>
                      <Avatar className={classes.pink}>
                        <YouTubeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="ตรวจสอบคุณวุฒิเดิม"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                  <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                    component={Link}
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1hbefU2BtEhDZkkbpoR2jxZgdQ1enwocz/view?usp=sharing"
                    target="_blank"
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
                    href="http://academic.pcru.ac.th"
                    target="_blank"
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
                    href="http://academic.pcru.ac.th"
                    target="_blank"
                  >
                    <ListItemAvatar>
                      <Avatar className={classes.pink}>
                        <YouTubeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="แนะนำการใช้ระบบทะเบียนและวัดผล"
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
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                    component={Link}
                    rel="noopener noreferrer"
                    href="http://academic.pcru.ac.th"
                    target="_blank"
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
                    selected={selectedIndex === 6}
                    onClick={(event) => handleListItemClick(event, 6)}
                    component={Link}
                    rel="noopener noreferrer"
                    href="http://academic.pcru.ac.th"
                    target="_blank"
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
            - การตรวจสอบผลการเรียนและพ้นสภาพวัดผลทางทะเบียน
            <br />- การสำเร็จการศึกษาและการได้รับเกียรตินิยม
            <br />- เวลาเรียนและการขาดสอบปลายภาค
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="บทที่ 5 คำร้องต่าง ๆ ด้านวิชาการ" disableWidgetMenu>
            - การพักการเรียนและการคืนสถาพนักศึกษา
            (การขอลาพักการศึกษา/การขอรักษาสถานภาพการนักศึกษา/การขอคืนสถานภารการเป็นนักศึกษา)
            <br />- การขอใบรับรองและใบรายงานผลการเรียน
            (การขอใบรับรองการเป็นนักศึกษา/ ใบรายงานผลการเรียน)
            <br />- การย้ายและการลาออก (การย้ายสาขาวิชา/การย้ายภาค (จากปกติไป
            กศ.ปช.)/การย้ายสถานศึกษา/การลาออก)
            <br />- การเปลี่ยนชื่อ – สกุล (การเปลี่ยนชื่อ-สกุล ยศ)
          </Widget>
        </Grid>
        <Grid item xs={12} md={12}>
          <List dense={true}>
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              component={Link}
              rel="noopener noreferrer"
              href="http://academic.pcru.ac.th"
              target="_blank"
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
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              component={Link}
              rel="noopener noreferrer"
              href="http://academic.pcru.ac.th"
              target="_blank"
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
    </>
  );
}
