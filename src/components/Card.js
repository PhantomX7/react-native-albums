import React from 'react';
import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{children}</View>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 1.5,
      },
    }),
  },
};

export default Card;
