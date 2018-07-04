import React from "react";
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({SigneIn}) => {
  return (
    <Menu.Item position="right">
      <Button onClick={SigneIn} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
