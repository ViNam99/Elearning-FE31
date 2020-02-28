import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
const prefix="countupstudent"
const CountUpStudent = () => {
    return (
        <div className={prefix}>
            <Container>
                <Row>
                    <Col sm="6" xs="12">
                    <h5>Education Mission</h5>
                    <p>The Department of Education and Training is led by Director-General, Dr Jim Watterston. The portfolio ministers are Kate Jones, Minister for Education and Minister for Tourism, Major Events and the Commonwealth Games and Yvette D'Ath, Attorney-General and Minister for Justice and Minister for Training and Skills</p>
                    <a href="#" class="read-more">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} aria-hidden="true"/></a>
                    </Col>
                    <Col sm="6" xs="12">
                    <h5>Minister for Training and Skills</h5>
                    <p>The Department of Education and Training is led by Director-General, Dr Jim Watterston. The portfolio ministers are Kate Jones, Minister for Education and Minister for Tourism, Major Events and the Commonwealth Games and Yvette D'Ath, Attorney-General and Minister for Justice and Minister for Training and Skills</p>                    <a href="#" class="read-more">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} aria-hidden="true"/></a>
                    </Col>
                </Row>
                <div className={`${prefix}__our-anal`}>
                    <Row>
                        <Col xs="4">
                        <div class="analytics-chart">
					            <div class="piechart" data-border-color="#6664d4" data-value=".77"><canvas width="166" height="166"></canvas>
                                <CountUp end={77} redraw={true}>
                               {({ countUpRef, start }) => (
                                 <VisibilitySensor onChange={start} delayedCall>
                                 <span ref={countUpRef} />
                                 </VisibilitySensor>
                               )}
                               </CountUp>								
                               </div>
								<h5>Happy Students</h5>
					    </div>
                        </Col>
                        <Col xs="4">
                        <div class="analytics-chart">
					            <div class="piechart" data-border-color="#6664d4" data-value=".77"><canvas width="166" height="166"></canvas>
                                <CountUp end={99} redraw={true}>
                               {({ countUpRef, start }) => (
                                 <VisibilitySensor onChange={start} delayedCall>
                                 <span ref={countUpRef} />
                                 </VisibilitySensor>
                               )}
                               </CountUp>	
                               <div className="number"></div>							
                               </div>
								<h5>Success in Courses</h5>
					    </div>
                        </Col>
                        <Col xs="4">
                        <div class="analytics-chart">
					            <div class="piechart" data-border-color="#6664d4" data-value=".77"><canvas width="166" height="166"></canvas>
                                <CountUp end={90} redraw={true}>
                               {({ countUpRef, start }) => (
                                 <VisibilitySensor onChange={start} delayedCall>
                                 <span ref={countUpRef} />
                                 </VisibilitySensor>
                               )}
                               </CountUp>
								</div>
								<h5>Graduates Students</h5>
					    </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CountUpStudent;