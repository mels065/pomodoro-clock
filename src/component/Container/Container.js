import React, { Component } from 'react';
import {connect} from 'react-redux'
import './Container.css';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../redux/map-state';

import Presentational from '../Presentational/Presentational';

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

export default Container;
