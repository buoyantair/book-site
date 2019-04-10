import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Classes,
} from '@blueprintjs/core';

function Navigation({ history }) {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>Blueprint</NavbarHeading>
        <NavbarDivider />
        <Button
          onClick={() => {
            history.push('/');
          }}
          className={Classes.MINIMAL}
          icon="home"
          text="Home"
        />
        <Button
          onClick={() => {
            history.push('/books');
          }}
          className={Classes.MINIMAL}
          icon="document"
          text="Books"
        />
      </NavbarGroup>
    </Navbar>
  );
}

Navigation.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Navigation);
