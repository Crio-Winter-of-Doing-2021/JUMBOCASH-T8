import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
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
    width: 500,
    margin: "20px auto",
    [theme.breakpoints.down(600)]: {
      width: "330px",
      minHeight: "50vh",
    },
    [theme.breakpoints.down(330)]: {
      width: "280px",
    },
  },
  headerStyle: {
    margin: 0,
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

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/main");
  }, [navigate]);

  const [details, setDetails] = useState({
    username: "",
    email: "",
    mobile_no: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const handleChange = (prop) => (event) => {
    setDetails({ ...details, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setDetails({
      ...details,
      showPassword: !details.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(false);
    console.log(details);
    const register_details = {
      firstname: details.username,
      email: details.email,
      mobile_no: details.mobile_no,
      password: details.password,
    };
    if (details.mobile_no.length !== 10) {
      setIsLoading(true);
      setError("Please enter a valid mobile number");
    } else if (details.password !== details.confirmpassword) {
      setIsLoading(true);
      setError("Password and Confirm password should be same");
    } else {
      register(register_details, navigate, setError, setIsLoading);
    }
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
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 className={classes.headerStyle}>Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            {error !== "" && <div style={{ color: "red" }}>{error}</div>}
            <TextField
              fullWidth
              variant="standard"
              style={{ margin: "10px 0" }}
              label="Name"
              name="username"
              value={details.username}
              onChange={handleChange("username")}
              required
              placeholder="Enter your name"
            />

            <TextField
              fullWidth
              variant="standard"
              style={{ margin: "10px 0" }}
              label="Email"
              name="email"
              value={details.email}
              onChange={handleChange("email")}
              required
              placeholder="Enter your email"
            />
            <TextField
              fullWidth
              variant="standard"
              style={{ margin: "10px 0" }}
              label="Mobile No"
              name="mobile_no"
              value={details.mobile_no}
              onChange={handleChange("mobile_no")}
              required
              placeholder="Enter your mobile no"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />

            <FormControl
              fullWidth
              required
              style={{ margin: "10px 0" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={details.showPassword ? "text" : "password"}
                value={details.password}
                placeholder="Enter your password"
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {details.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl
              fullWidth
              required
              style={{ margin: "10px 0" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                type={details.showPassword ? "text" : "password"}
                value={details.confirmpassword}
                placeholder="Confirm your password"
                onChange={handleChange("confirmpassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {details.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              type="submit"
              onClick={submitHandler}
              className={classes.btnstyle}
              variant="contained"
            >
              Sign up
            </Button>

            <Typography>
              {" "}
              Already Registered ?<Link to="/">Sign In</Link>
            </Typography>
          </Paper>
        </Grid>
      )}
    </div>
  );
};
