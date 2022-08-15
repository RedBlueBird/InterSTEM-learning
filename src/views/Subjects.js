import React from "react";
import { Redirect } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// reactstrap components
import { Button, Card, Container, Row, Col, Badge } from "reactstrap";

// core components
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";

class Subjects extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {!["physics1"].includes(this.props.match.params.subjectName) && 
          <Redirect to="/" />
        }
        {(() => {
          let fields = [];
          let subjects = {
            physics1: {
              name: "AP Physics 1: Algebra-Based",
              description: "Learn about the foundational principles of physics as you explore Newtonian mechanics; work, energy, and power.",
              curriculum: [
                {
                  title: "Kinematics",
                  description: "Motions in 1-D, 2-D, and beyond",
                  time: "Chapter 1",
                }
              ], 
              tutors: [
                {
                  photo: "https://via.placeholder.com/200x200.png?text=ISL",
                  name: "Tutor Joe",
                }
              ]
            }
          };
          let subject = this.props.match.params.subjectName;
          return (
            <>
              <section className="section section-lg section-shaped bg-gray-dark">
                <div className="shape shape-style-1 shape-default">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col lg="6">
                        <h1 className="display-3 text-white mt-5">
                          {subjects[subject].name}
                        </h1>
                        <p className="lead text-white">
                          {subjects[subject].description}
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container>

                <div className="separator separator-bottom separator-skew">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>

              <section className="section section-lg section-shaped">
                <Container className="py-lg-md d-flex">
                  <div className="col px-0">
                    <Row>
                      <Col>
                        <h1 className="display-3 mt-5 text-center">
                          Curriculum Topics
                        </h1>
                        <p className="lead">
                          {/* Placeholder */}
                          <br />
                        </p>

                        <VerticalTimeline lineColor="#5e72e4">
                          {(() => {
                            let fields = [];
                            for (let arg in subjects[subject].curriculum) {
                              fields.push(
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work "
                                  contentStyle={{ background: '#fff', color: '#172b4d' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #5e72e4' }}
                                  date={subjects[subject].curriculum[arg].time}
                                  iconStyle={{ background: '#172b4d', color: '#172b4d' }}
                                >
                                  <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Amatic SC, cursive", fontSize: "2.5em" }}>
                                    {subjects[subject].curriculum[arg].title}
                                  </h3>
                                  <p>
                                    {subjects[subject].curriculum[arg].description}
                                  </p>
                                </VerticalTimelineElement>
                              )
                            }
                            return (<>{fields}</>);
                          }
                          )()}
                        </VerticalTimeline>

                      </Col>
                    </Row>
                  </div>
                </Container>
              </section>

              <section className="section">
                <Container>
                  <Card className="card-profile shadow">
                    <div className="px-4">

                      <Row className="justify-content-center text-center my-lg">
                        <Col lg="8">
                          <h2 className="display-3">Subject Tutors</h2>
                          <p className="lead text-muted">
                            {/* Placeholder */}
                          </p>
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        {(() => {
                          let fields = [];
                          for (let arg in subjects[subject].tutors) {
                            fields.push(
                              <Col className="mb-5 mb-lg-5" lg="6" md="12">
                                <div className="align-items-center justify-content-start">
                                  <img
                                    alt="..."
                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                    src={subjects[subject].tutors[arg].photo}
                                    style={{ width: "200px", height: "200px", backgroundPosition: "center", objectFit: "cover" }}
                                  />
                                  <div className="pt-4 flex-grow-1 text-center">
                                    <h5 className="title">
                                      <span className="d-block mb-1">{subjects[subject].tutors[arg].name}</span>
                                    </h5>
                                  </div>
                                </div>
                              </Col>
                            )
                          }
                          return (<>{fields}</>);
                        })()}
                      </Row>

                    </div>
                  </Card>
                </Container>
              </section>
            </>
          )
        })()}
        <Footer />
      </>
    );
  }
}

export default Subjects;