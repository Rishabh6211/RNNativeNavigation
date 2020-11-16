import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import Constants from '../constants';

const Header = ({children}) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: Constants.Colors.Primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
