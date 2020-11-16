import React, {memo} from 'react';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Paragraph from '../../components/Paragraph';

const Transaction = ({navigation}) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Transaction);
