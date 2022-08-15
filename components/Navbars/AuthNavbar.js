import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-top navbar-horizontal navbar-dark"
        style={{ zIndex: "2000" }}
        expand="md"
      >
        <Container className="px-4">
          <Link href="/admin/dashboard">
            <span>
              <NavbarBrand href="#pablo">
                <img alt="..." src={require("assets/img/logo.png")} />
              </NavbarBrand>
            </span>
          </Link>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link href="/admin/dashboard">
                    <img alt="..." src={require("assets/img/logo.png")} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Home</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/demo">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Demo</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/courses">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Courses</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/login">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Login</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/register">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Register</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">About</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Contact</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/admin/dashboard">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <span className="nav-link-inner--text">Dashboard</span>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
