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
import { Button, Card, Container, Row, Col, Badge } from "reactstrap";

// core components
import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
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
          
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">

                  <Row className="justify-content-center text-center mb-lg pt-4">
                    <Col lg="8">
                      <h2 className="display-3">Our Team</h2>
                      <p className="lead text-muted">
                        Our mission is to enable students interested in STEM
                        as well as other topics to access the resources and
                        education they need to thrive in this ever-changing world
                      </p>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    {(() => {
                      let fields = [];
                      let board = [{
                        photo: require("assets/img/team/andy-yang.png"),
                        name: "Andy Yang",
                        title: ["President", "Founder", "Education Director"],
                        description: "Andy is a junior at Dutch Fork High School in South Carolina. He is an AIME qualifier, as well as winning other numerous math and science awards. Andy's main interests are math, biology, law, and computer science. Outside of Interstem Learning, Andy likes to play soccer, basketball, and chess."
                      }, {
                        photo: require("assets/img/team/jeffrey-zhang.jpg"),
                        name: "Jeffrey Zhang",
                        title: ["Web Director"],
                        description: "Jeffrey is currently a senior at Mission San Jose High School in California. Qualified USACO Gold (so close to platinum division, very sad), USAPhO, and won other computer science related competitions w/o teams. Jeffrey's major focuses are on computer science and physics, is catching up on math in the meantime as he realizes he can't get far in those two subjects without it. He also likes to read & write, coming up with cool projects and visual designs."
                      }, {
                        photo: require("assets/img/team/david-su.png"),
                        name: "David Su",
                        title: ["Marketing Director"],
                        description: "David is a senior at Bishop Miege High School. David is a two-time NEC finalist, as well as multiple awards in social science and STEM related subjects. David's main academic interests are economic, politics, astronomy, and statistics. David is a defensive lineman at his high school football team, he also enjoys poker and cardistry."
                      }, {
                        photo: "https://via.placeholder.com/200x200.png?text=ISL",
                        name: "Jason Kim",
                        title: ["Recruitment Director"],
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      }, {
                        photo: require("assets/img/team/ethan-yan.jpg"),
                        name: "Yifei Yan",
                        title: ["Secretary"],
                        description: "Yifei is a junior at the American School in London in London. He has won numerous math awards and is currently working as a lead programmer for his award winning robotics team. Yifei's main interests vary from math, computer science, physics, to music and robotics. In his spare time, Yifei plays volleyball and practices the violin."
                      }
                      ];
                      for (let arg in board) {
                        fields.push(
                          <Col className="mb-5 mb-lg-5" lg="6" md="12">
                            <div className="align-items-center justify-content-start">
                              <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={board[arg].photo}
                                style={{ width: "200px", height: "200px", backgroundPosition: "center", objectFit: "cover" }}
                              />
                              <div className="pt-4 flex-grow-1 text-center">
                                <h5 className="title">
                                  <span className="d-block mb-1">{board[arg].name}</span>
                                  {board[arg].title.map((title) => (<><Badge className="text-muted m-1" pill>{title}</Badge></>))}
                                </h5>
                                <h7>
                                  {board[arg].description}
                                </h7>
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

              <Card className="card-profile shadow mt-lg">
                <div className="px-4">

                  <Row className="justify-content-center text-center mb-lg pt-4">
                    <Col lg="8">
                      <h2 className="display-3">Current Tutors</h2>
                      <p className="lead text-muted">
                        Bright people that made this effort possible
                      </p>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    {(() => {
                      let fields = [];
                      let tutors = [{
                        photo: "https://via.placeholder.com/200x200.png?text=ISL",
                        name: "Tutor Joe",
                        subjects: ["Algebra 1"],
                      }
                      ];
                      for (let arg in tutors) {
                        fields.push(
                          <Col className="mb-5 mb-lg-5" lg="6" md="12">
                            <div className="align-items-center justify-content-start">
                              <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={tutors[arg].photo}
                                style={{ width: "200px", height: "200px", backgroundPosition: "center", objectFit: "cover" }}
                              />
                              <div className="pt-4 flex-grow-1 text-center">
                                <h5 className="title">
                                  <span className="d-block mb-1">{tutors[arg].name}</span>
                                  {tutors[arg].subjects.map((subject) => (<><Badge className="text-muted m-1" pill>{subject}</Badge></>))}
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
        </main>
        <Footer />
      </>
    );
  }
}

export default Profile;
