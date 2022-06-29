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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaDiscord } from "react-icons/fa";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-default font-weight-light mb-2">
                  InterSTEM Learning
                </h3>
                <h4 className="mb-0 font-weight-light">
                  serving free online classes around the world
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Join us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href="https://www.instagram.com/interstem_learning/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href="https://twitter.com/creativetim"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://discord.gg/mvv3yhq688"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <FaDiscord />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Join us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <Link to="/"> InterSTEM Learning </Link>
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <Link to="/about-us"> About Us </Link>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      User Agreements
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
