import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import Constants from '../constants';

const TextInput = ({errorText, ...props}) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={Constants.Colors.Primary}
      theme={{
        colors: {
          primary: Constants.Colors.Primary,
          placeholder: Constants.Colors.Gray,
        },
      }}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: Constants.Colors.White,
  },
  error: {
    fontSize: 14,
    color: Constants.Colors.Error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);
