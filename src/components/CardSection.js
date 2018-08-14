import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{children}</View>;
};

CardSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
