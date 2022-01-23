import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { Loading } from "../Loader/Loading";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    marginTop: "10%",
    [theme.breakpoints.down(500)]: {
      marginTop: "25%",
    },
  },

  paperStyle: {
    padding: 20,
    width: 480,
    margin: "20px auto",
    [theme.breakpoints.down(600)]: {
      width: "330px",
      minHeight: "50vh",
    },
    [theme.breakpoints.down(330)]: {
      width: "280px",
    },
  },
  avatarStyle: {
    backgroundColor: "#47b475",
  },
  btnstyle: {
    margin: "8px 0",
    backgroundColor: "#47b475",
    color: "white",
  },
}));
export const LoginForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    localStorage.getItem("refresh") && navigate("/main");
  }, [navigate]);

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((preDetail) => {
      return {
        ...preDetail,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(false);
    const login_details = {
      username: details.email,
      password: details.password,
    };

    login(login_details, navigate, setError, setIsLoading);
  };

  return (
    <div>
      {!isLoading ? (
        <Loading />
      ) : (
        <Grid container className={classes.gridStyle}>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            {error !== "" && <div style={{ color: "red" }}>{error}</div>}
            <TextField
              style={{ margin: "6px 0" }}
              label="Email"
              name="email"
              value={details.email}
              placeholder="Enter email"
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              style={{ margin: "10px 0" }}
              label="Password"
              name="password"
              value={details.password}
              placeholder="Enter password"
              onChange={handleChange}
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              onClick={submitHandler}
              variant="contained"
              className={classes.btnstyle}
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Do you have an account ?<Link to="/register">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      )}
    </div>
  );
};
