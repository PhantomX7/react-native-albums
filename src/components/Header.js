import React from 'react';
import { Platform, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        paddingTop: 15,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Header;
