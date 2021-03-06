/**
 * @file
 * Basic card component
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({ children, className, ...props }) =>
  children && <div className={classNames(className, 'g-card')}>{children}</div>;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
