import React, {memo, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {emailValidator, passwordValidator} from '../../utils/Validator';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import Constants from '../../constants';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppAction from '../../actions';
const LoginScreen = ({navigation, AppAction}) => {
  const [email, setEmail] = useState({value: 'newweb@yopmail.com', error: ''});
  const [password, setPassword] = useState({value: '123ABCabc', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    const payload = {
      email: email.value,
      password: password.value,
    };
    // AppAction.login(payload);
    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton
        goBack={() => {
          navigation.pop();
        }}
      />
      <Logo />
      <Header>Welcome back.</Header>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPasswordScreen');
          }}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: Constants.Colors.Secondary,
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
