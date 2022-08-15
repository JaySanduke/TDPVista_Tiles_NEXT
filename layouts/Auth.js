import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import "../assets/css/style.css";

import routes from "routes.js";

class Auth extends React.Component {
  componentDidMount() {
    // document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    // document.body.classList.remove("bg-default");
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content login-back">
          <AuthNavbar />
          <div className="header py-7 py-lg-8"></div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
            <Row className="justify-content-start">
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="*" to="/login" />
              </Switch>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Auth;
