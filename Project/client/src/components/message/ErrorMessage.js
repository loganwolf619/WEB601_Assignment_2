import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ text }) => (
    <span style={{ color: "Red" }} >{text}</span>
);

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired
};

export default ErrorMessage