import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
// styles
import useStyles from "./styles";

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

  return (
    <>
      <PageTitle title="บทเรียนออนไลน์" />

      {/* {vdo_list.map((link) => (
        <div className="col-md-4" key={link.id}>
          <Grid container spacing={4}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="/static/images/grid/complex.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Standard license {link.id}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID: 1030114
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>


        </div>

      ))} */}
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} className={classes.widgcolor}>
          <Widget disableWidgetMenu>{"แบบทดสอบก่อนเรียน (Pre-test)"}</Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="บทที่ 1 ข้อมูลเบื้องต้น" disableWidgetMenu>
            - ข้อมูลเบื้องต้นเกี่ยวกับการเรียนของนักศึกษาใหม่
            <br />- ตรวจสอบคุณวุฒิเดิม
            <br />- ทุนอุดหนุนการศึกษา
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="บทที่ 2 การใช้ระบบสารสนเทศ" disableWidgetMenu>
            - แนะนำเว็บไซต์สำนักส่งเสริมวิชาการและงานทะเบียน
            <br />- แนะนำการใช้ระบบทะเบียนและวัดผล
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="บทที่ 3 การลงทะเบียนรายวิชาเรียน" disableWidgetMenu>
            - การยกเว้นรายวิชาและการโอนผลการเรียน
            <br />-
            การเปิดรายวิชาเป็นกรณีพิเศษ/การเพิ่ม-ถอนรายวิชา/การยกเลิกรายวิชา
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
          <Widget disableWidgetMenu>{"แบบทดสอบหลังเรียน (Post-test)"}</Widget>
        </Grid>
        <Grid item xs={12} md={12}>
          <Widget disableWidgetMenu>{"แบบประเมินความพึงพอใจ"}</Widget>
        </Grid>
      </Grid>
    </>
  );
}
