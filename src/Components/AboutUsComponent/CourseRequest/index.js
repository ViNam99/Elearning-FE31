import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const prefix="course-request"
const CountRequest = () => {
    return (
        <div className={prefix}>
            <Container>
                <Row>
                    <Col md="6" xs="12">
         <div className="theme-form-style-one">
  <h3>Request for a free  Education Class</h3>
  <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography variant="headline" gutterBottom>
                            Signup
                        </Typography>
                        <FormControl fullWidth margin='normal'>
                            <InputLabel>Username</InputLabel>
                            <Input name='username' fullWidth />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant='extendedFab'
                                color='primary'
                                type='submit'
                            >
                                Signup
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
            </div>
                    </Col>
                    <Col md="6" xs="12">
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CountRequest;