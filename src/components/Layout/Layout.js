import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from "@material-ui/core";
import Icon from "@mdi/react";

//icons
import { mdiFacebook as FacebookIcon } from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";

import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import { textTypography } from "../../components/Wrappers";
// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/app/dashboard`}
              component={Dashboard}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/app/typography`}
              component={Typography}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/app/tables`}
              component={Tables}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/app/notifications`}
              component={Notifications}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/app/ui`}
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/app/ui/maps`}
              component={Maps}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/app/ui/icons`}
              component={Icons}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/app/ui/charts`}
              component={Charts}
            />
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link
                color={"primary"}
                href={"https://academic.pcru.ac.th"}
                target={"_blank"}
                className={classes.link}
              >
                สำนักส่งเสริมวิชาการและงานทะเบียน
              </Link>
              <Link
                color={"primary"}
                href={"https://www.pmis.pcru.ac.th/mis/webservice"}
                target={"_blank"}
                className={classes.link}
              >
                ระบบทะเบียนและวัดผลนักศึกษา
              </Link>

              <textTypography color={"primary"} className={classes.link}>
                {" "}
                Tel. 0-5671-7119
              </textTypography>
            </div>
            <div>
              <Link
                href={"https://www.facebook.com/AcademicPCRU"}
                target={"_blank"}
              >
                <IconButton aria-label="facebook">
                  <Icon path={FacebookIcon} size={1} color="#3860BB" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
