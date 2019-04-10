/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Colors } from '@blueprintjs/core';
import styled from 'styled-components';
import Navigation from 'components/Navigation';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

function App({ className }) {
  return (
    <div className={`bp3-dark ${className}`}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledApp = styled(App)`
  background: ${Colors.DARK_GRAY3};
`;

export default StyledApp;
