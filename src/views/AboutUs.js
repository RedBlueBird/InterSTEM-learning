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
import { Button, Card, Container, Row, Col } from "reactstrap";

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
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "David Su",
                            title: ["Marketing Director"]
                        }, {
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "Jeffrey Zhang",
                            title: ["Web Director"]
                        }, {
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "Andy Yang",
                            title: ["Co-Founder", "Web Director", "Education Director"]
                        }, {
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "Kiratjit Singh",
                            title: ["Co-Founder", "Social Outreach Director", "Operations Director"]
                        }, {
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "Jason Kim",
                            title: ["Recruitment Director"]
                        }, {
                            photo: "https://via.placeholder.com/200x200.png?text=ISL",
                            name: "Deborah Gadri",
                            title: ["Design Director"]
                        }
                        ];
                        for (let arg in board) {
                            fields.push(
                                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={board[arg].photo}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                            <span className="d-block mb-1">{board[arg].name}</span>
                                                <small className="h6 text-muted">
                                                    {board[arg].title.map((title)=>(<>{title}<br/></>))}
                                                </small>
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
