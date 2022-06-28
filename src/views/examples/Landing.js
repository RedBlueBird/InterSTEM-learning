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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import Hero from "../IndexSections/Hero.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
            <Hero />
 
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>

                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>What We Do</h3>
                    <p>
                        A Non-Profit Organization that offers online classes and tutoring services
                        in STEM and Social Science topics. SAT/AP/CBSE/Olympiad prep, and much more!
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="fa fa-map" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Free private tutoring anywhere anytime
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="fa fa-flash" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Active community & support</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="default"
                            >
                              <i className="fa fa-flag" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              PVSA volunteer hours + leadership positions
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        <section className="section section-lg">
            <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-md-1" md="6">
                        <img
                            alt="..."
                            className="img-fluid floating"
                            src={require("assets/img/theme/promo-1.png")}
                        />
                    </Col>

                    <Col className="order-md-2" md="6">
                        <div className="pl-md-5">
                            <h3>What We Are</h3>
                            <p>
                                Qualified team of tutors include accomplished students ranging from olympiad medalists to SAT perfect scorers.
                            </p>
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="default"
                                            >
                                                <i className="fa fa-shield" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Resilient infront challenges
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="default"
                                            >
                                                <i className="fa fa-wrench" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">Creative under constraints</h6>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Badge
                                                className="badge-circle mr-3"
                                                color="default"
                                            >
                                                <i className="fa fa-heart" />
                                            </Badge>
                                        </div>
                                        <div>
                                            <h6 className="mb-0">
                                                Collaborative with peers
                                            </h6>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

          <section className="section pb-0 bg-gradient-gray-dark">
            <Container>
              <Col className="row-grid align-items-center">
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h4 className="display-3 text-white">What We Offer</h4>
                      <p className="text-white">
                        Dive into a diverse selection of topics, for free. <br/>
                        Or join us, and enrich the minds together.
                      </p>
                    </div>
                  </div>

                  <Card className="shadow shadow-lg--hover mt-4">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                            <i className="fa fa-graduation-cap" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-default">
                            AP Curriculum
                          </h5>
                            <div className="d-flex flex-row flex-wrap">
                                {(() => {
                                    let fields = [];
                                    let ap_classes = ["Biology", "Chemistry", "Calculus AB/BC", "World History Modern",
                                        "Physics 1", "Physics C Mechanics", "Physics C Electromagnetism", "Statistics",
                                        "Psychology", "Macroeconomics", "Microeconomics", "Comparative Government and Politics",
                                        "Chinese", "French", "Computer Science A"];
                                    for (let arg in ap_classes) {
                                        fields.push(<Badge className="m-1" color="primary" pill>AP {ap_classes[arg]} Prep</Badge>);
                                    }
                                    return (<>{fields}</>);
                                })()}
                            </div>
                        </div>
                      </div>
                    </CardBody>
                            </Card>

                  <Card className="shadow shadow-lg--hover mt-4">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                            <i className="fa fa-graduation-cap" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-default">
                            STEM Olympiads
                          </h5>
                            <div className="d-flex flex-row flex-wrap">
                                {(() => {
                                    let fields = [];
                                    let olympiad_classes = ["AMC8", "AMC10", "USACO Bronze", "USACO Silver", "F=ma"];
                                    for (let arg in olympiad_classes) {
                                        fields.push(<Badge className="m-1" color="primary" pill>{olympiad_classes[arg]} Prep</Badge>);
                                    }
                                    return (<>{fields}</>);
                                })()}
                            </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="shadow shadow-lg--hover mt-4">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-default rounded-circle text-white">
                            <i className="fa fa-graduation-cap" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-default">
                            Others
                          </h5>
                            <div className="d-flex flex-row flex-wrap">
                                {(() => {
                                    let fields = [];
                                    let other_classes = ["SAT/PSAT", "Algebra 1", "Algebra 2", "Geometry", "Pre-Calculus"];
                                    for (let arg in other_classes) {
                                        fields.push(<Badge className="m-1" color="primary" pill>{other_classes[arg]} Prep</Badge>);
                                    }
                                    return (<>{fields}</>);
                                })()}
                            </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
              </Col>
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

        <section className="section section-lg mt-2">
            <Container>
                <Card className="bg-gradient-gray-dark shadow-lg border-0">
                    <div className="p-5">
                        <Row className="align-items-center">
                            <Col lg="8">
                                <h3 className="text-white">
                                    What You Waiting For?
                                </h3>
                                <p className="lead text-white mt-3">
                                    Sign up as a student or join us as a tutor, today.
                                </p>
                            </Col>
                            <Col className="ml-lg-auto" lg="3">
                                <Button
                                    block
                                    className="btn-white"
                                    color="default"
                                    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                                    size="lg"
                                >
                                    Sign-up
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Container>
        </section>


                {/*<section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
                </section>*/}


                
          <section className="section section-lg bg-gradient-gray-dark">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Frequently Asked Questions</h2>
                  <p className="lead text-white">
                    You got questions, we got answers
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <h5 className="text-white mt-3">Who are qualified to register as students/tutors?</h5>
                  <p className="text-white mt-3">
                    Students and Tutors who are currently in elementary school all the way to high school.
                  </p>
                </Col>
                <Col lg="4">
                  <h5 className="text-white mt-3">How to get volunteer hours?</h5>
                  <p className="text-white mt-3">
                    Tutors can get volunteer hours by helping students and/or creating contents in their strongest subjects.
                  </p>
                </Col>
                <Col lg="4">
                  <h5 className="text-white mt-3">Why does the Chicken cross the road?</h5>
                  <p className="text-white mt-3">
                    To get internet access in the hub next street to access our community!
                  </p>
                </Col>
              </Row>
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

           <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Got more questions?</h4>
                      <p className="mt-0">
                        Fill in the form below and someone will respond asap
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
                </section>

          <section className="section section-lg">
            <Container>
            <h1 className="mb-5">
                <span>Sponsors</span>
            </h1>
            <Row>
                <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                        InterSTEM Learning
                    </small>
                    <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src="https://via.placeholder.com/200x200.png?text=ISL"
                        style={{ width: "150px" }}
                    />
                     </Col>
                     <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                        InterSTEM Learning
                    </small>
                    <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src="https://via.placeholder.com/200x200.png?text=ISL"
                        style={{ width: "150px" }}
                    />
                    </Col>
                     <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                        InterSTEM Learning
                    </small>
                    <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src="https://via.placeholder.com/200x200.png?text=ISL"
                        style={{ width: "150px" }}
                    />
                    </Col>
                     <Col sm="3" xs="6">
                    <small className="d-block text-uppercase font-weight-bold mb-4">
                        InterSTEM Learning
                    </small>
                    <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src="https://via.placeholder.com/200x200.png?text=ISL"
                        style={{ width: "150px" }}
                    />
                </Col>
            </Row>
            </Container>
           </section>

        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
