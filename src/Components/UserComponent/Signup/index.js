import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form } from "formik";
import { SignUpAction } from '../../../redux/Actions/User';
import { SignUpUserSchema } from '../../../Services/UserService';
import { alertYesNo, alertNotify } from '../../../Utils/alert';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = props => {
  const _handleSubmit = value =>{
     SignUpAction(value);
     alertYesNo("Thông Báo", "Đăng Ký Thành Công nhấn tiếp tục để qua trang đăng nhập nhấn cancel để quay lại trang chủ", "success", "Yes").then(
      res => {
        if (res.value) {
              props.history.push("/signIn" , {
              taiKhoan:value.taiKhoan,
              matKhau:value.matKhau
            });
        }
        else {
          props.history.push("/")
        }
      }
    );
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
          hoTen: "",
          email: "",
          soDT: "",
          maNhom: "GP01"
        }}
        onSubmit={_handleSubmit}
        validationSchema={SignUpUserSchema} 
        render={({ handleChange, values, errors, touched }) =>(
        <Form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="taiKhoan"
                variant="outlined"
                required
                fullWidth
                id="taiKhoan"
                label="Account"
                autoFocus
                onChange={handleChange}
                value={values.taiKhoan}
              />
             {errors.taiKhoan && touched.taiKhoan ? (
            <div className="alert alert-primary">{errors.taiKhoan} !</div>
          ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="matKhau"
                label="Password"
                name="matKhau"
                autoComplete="current-password"
                type="password"
                onChange={handleChange}
                value={values.matKhau}
              />
            {errors.matKhau && touched.matKhau ? (
            <div className="alert alert-primary">{errors.matKhau} !</div>
          ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="hoTen"
                label="Name"
                name="hoTen"
                autoComplete="name"
                onChange={handleChange}
                value={values.hoTen}
              />
                     {errors.hoTen && touched.hoTen ? (
            <div className="alert alert-primary">{errors.hoTen} !</div>
          ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={values.email}
              />
                     {errors.email && touched.email ? (
            <div className="alert alert-primary">{errors.email} !</div>
          ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="soDT"
                label="Phone Number"
                id="soDT"
                autoComplete="current-password"
                onChange={handleChange}
                value={values.soDT}
              />
                     {errors.soDT && touched.soDT ? (
            <div className="alert alert-primary">{errors.soDT} !</div>
          ) : null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Form>
        )}
        />
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}
export default SignUp;
