import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form } from "formik";
import { connect } from "react-redux"
import { fetchCredentialAction } from '../../../redux/Actions/User';
import { SignInUserSchema } from '../../../Services/UserService';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = props => {
  const _handleSubmit = value => {
    props.dispatch(fetchCredentialAction(value, props.history));
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
          Sign in
        </Typography>
        <Formik 
        initialValues={{
          taiKhoan: props.location.state
          ? props.location.state.taiKhoan
          : "",
          matKhau: props.location.state ? props.location.state.matKhau : ""
        }}
        validationSchema={SignInUserSchema}
        onSubmit={_handleSubmit}
        render={({ handleChange, values, errors, touched }) => (
        <Form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="taiKhoan"
            label="Account"
            name="taiKhoan"
            autoFocus
            onChange={handleChange}
            value={values.taiKhoan}
          />
          {errors.taiKhoan && touched.taiKhoan ? (
            <div className="alert alert-primary">{errors.taiKhoan} !</div>
          ) : null}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="matKhau"
            label="Password"
            type="password"
            id="matKhau"
            autoComplete="current-password"
            onChange={handleChange}
            value={values.matKhau}
          />
             {errors.matKhau && touched.matKhau ? (
            <div className="alert alert-primary">{errors.matKhau} !</div>
          ) : null}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form> )} />
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
export default connect()(SignIn);
