import React from "react";
import Router, { withRouter } from "next/router";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import CORE from 'core.learnbase.com'
// import { loadEnvConfig } from "next/dist/lib/load-env-config";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Login.loginStatus.WILL_LOGIN,
    };
  }

  static loginStatus = {
    WILL_LOGIN: 1,
    LOGGING_IN: 2,
    LOGGED_IN: 3,
    LOGIN_FAILED: 4,
    SIGNING_UP: 5,
  };

  login() {
    this.setState({
      status: Login.loginStatus.LOGGING_IN,
    });

    setTimeout(() => {
      window.location = CORE.env.HOME_PAGE_URL;
    }, 2000);
  }

  signup() {
    this.setState({
      status: Login.loginStatus.SIGNING_UP,
    });

    setTimeout(() => {
      this.setState({
        status: Login.loginStatus.LOGIN_FAILED,
      });
    }, 2000);
  }

  render() {
    return (
      <Container>
        <Jumbotron className="mt-4 mb-2">
          {this.state.status === Login.loginStatus.LOGIN_FAILED && (
            <Alert variant="danger"> Invalid Username or Password </Alert>
          )}
          {this.state.status === Login.loginStatus.LOGGED_IN && (
            <Alert variant="success"> Login Success </Alert>
          )}
          <InputGroup className="pb-3">
            <FormControl
              placeholder={this.props.username}
              aria-label={this.props.username}
              aria-describedby="auth-login"
            />
          </InputGroup>
          <InputGroup className="pb-3">
            <FormControl
              placeholder={this.props.password}
              aria-label={this.props.password}
              aria-describedby="auth-login"
            />
          </InputGroup>
          <Button className="mr-4" onClick={() => this.login()}>
            {this.state.status === Login.loginStatus.LOGGING_IN && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-2"
              />
            )}
            {this.props.login}
          </Button>
          <Button className="mr-4" onClick={() => this.signup()}>
            {this.state.status === Login.loginStatus.SIGNING_UP && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-2"
              />
            )}
            {this.props.signup}
          </Button>
        </Jumbotron>
      </Container>
    );
  }
}

export async function getStaticProps() {
  return {
    props: {
      username: "Username",
      password: "Password",
      login: "Login",
      signup: "Signup",
      title: "Login/Sign Up",
    },
  };
}

export default withRouter(Login);
