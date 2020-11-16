import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import Constants from '../../constants';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../utils/Validator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppAction from '../../actions';
const RegisterScreen = ({navigation, AppAction}) => {
  const [fName, setFName] = useState({value: 'Amit', error: ''});
  const [lName, setLName] = useState({value: 'Singh', error: ''});
  const [email, setEmail] = useState({value: 'newWeb@yopmail.com', error: ''});
  const [password, setPassword] = useState({value: '123ABCabc', error: ''});
  const _onSignUpPressed = () => {
    const fNameError = nameValidator(fName.value);
    const lNameError = nameValidator(lName.value);

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || fNameError || lNameError) {
      setFName({...name, error: fNameError});
      setLName({...name, error: lNameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    const payload = {
      fName: fName.value,
      lName: lName.value,
      email: email.value,
      password: password.value,
    };
    AppAction.saveRegistrationData(payload);
    navigation.navigate('PlaidRegistration');
  };
  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={fName.value}
        onChangeText={(text) => setFName({value: text, error: ''})}
        error={!!fName.error}
        errorText={fName.error}
      />
      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lName.value}
        onChangeText={(text) => setLName({value: text, error: ''})}
        error={!!lName.error}
        errorText={lName.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Constants.Colors.Secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: Constants.Colors.Primary,
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  AppAction: bindActionCreators(AppAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
