import styles from "./Header.module.scss";
import Link from "next/link";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import api from "@/api";
import Head from "next/head";

export default class Header extends React.Component {
  componentDidMount() {
    api()
      .get("/modules/list?top=5")
      .then((response) => {
        return JSON.parse(JSON.stringify(response.data));
      })
      .then((data) => {
        this.setState({
          ...data,
        });
      });
  }

  render() {
    if (!this.props) {
      return <div className={styles.header}></div>;
    }

    return (
      <>
        <Head>
          <title>{this.props.title || "Title"}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.header}>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand>
              <Link
                href={this.props.url || "/home"}
                as={this.props.scheme || "/home"}
              >
                <div className={styles.title}>
                  {this.props.title || "Site Name"}
                </div>
              </Link>
            </Navbar.Brand>
            <NavDropdown.Divider />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto mr-2">
              <Link href="/login" as="/login">
                <Nav.Link href="/login">Login/Sign Up</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}
