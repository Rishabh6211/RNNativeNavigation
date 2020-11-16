import React, {memo} from 'react';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';
import Constants from '../../constants';
const HomeScreen = ({navigation}) => (
  <Background>
    <Logo />
    <Header>NexWEB</Header>
    <Paragraph>Internet Web Technology.</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      labelStyle={{color: Constants.Colors.Primary}}
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
