import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";

//COMPONENTS
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSigneIn = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSigneOut = () => {
    this.setState({
      authenticated: false
    })

    this.props.history.push('/')
  }

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item
            as={NavLink}
            activeClassName="active"
            exact={true}
            to="/"
            header
          >
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          { 
            authenticated &&
            <Menu.Item as={NavLink} to="/people" name="People" />
          }
          {
            authenticated &&
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          }
          { 
            authenticated ? 
              <SignedInMenu SigneOut={this.handleSigneOut} /> 
              : 
              <SignedOutMenu SigneIn={this.handleSigneIn} /> 
          }
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
