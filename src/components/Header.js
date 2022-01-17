import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import logo from "../images/JumbotailLogo.png";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#47b475",
    padding: "0.5rem 2rem",
  },
  headerToolbar: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down(545)]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  icon: {
    height: "3rem",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    marginLeft: "auto",
    [theme.breakpoints.down(545)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down(330)]: {
      fontSize: "1rem",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const chasflowHead = () => {
    return (
      <Typography variant="h6" component="div" className={classes.logo}>
        CashFlow Management App
      </Typography>
    );
  };
  return (
    <Box>
      <AppBar className={classes.header}>
        <Toolbar className={classes.headerToolbar}>
          <a href="https://jumbotail.com/">
            <img src={logo} alt="jumbotail logo" className={classes.icon} />
          </a>
          {chasflowHead()}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
