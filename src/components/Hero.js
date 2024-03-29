/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero bg-gradient-gray-dark hero-image">
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>

            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center p-3 glass" lg="6">
                    <h1 className="text-white">
                        InterSTEM Learning
                    </h1>

                    <p className="lead text-white">
                      Serving free online classes for students around the world
                      </p>

                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeJvoSvIHeCAYbEOA-IEV62HiO0ozXpo3lecbltJEH4PbCFow/viewform"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-group gray-dark"/>
                        </span>
                        <span className="btn-inner--text">
                          Sign up as 
                          <span className="mr-1 text-blue"> Student</span>
                        </span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0 bg-gray-dark"
                        color="github"
                        href="https://docs.google.com/forms/d/1U5Qai_5Yj1g-p3OMeJyh1xwMG4vgAX0aLml_dwfdwF0/viewform"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user-plus" />
                        </span>
                        <span className="btn-inner--text">
                          Sign up as
                          <span className="mr-1 text-blue"> Tutor</span>
                        </span>
                      </Button>
                    </div>

                  </Col>
                </Row>
              </div>
            </Container>

            <div className="separator separator-bottom separator-skew zindex-100">
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
        </div>
      </>
    );
  }
}

export default Hero;
