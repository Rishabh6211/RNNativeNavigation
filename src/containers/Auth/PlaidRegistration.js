import * as AppAction from '../../actions';
import {PLAID_PUBLIC_KEY} from '../../constants/urls';
import React, {useState} from 'react';
import PlaidAuthenticator from 'react-native-plaid-link';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View} from 'react-native';
import BackButton from '../../components/BackButton';
const PlaidRegistration = ({navigation, AppAction}) => {
  console.log('Plaid Registration');
  const [status, setStatus] = useState('');
  const registrationData = useSelector(
    (state) => state.authReducer.registrationData,
  );
  const _onLoadStart = () => {
    console.log('On Load Start');
  };
  const _onLoad = (props) => {
    console.log('On Load', props);
  };
  const _onLoadEnd = () => {
    console.log('On Load End');
  };
  const _onMessage = (data) => {
    setStatus(
      data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase(),
    );
    if (
      data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase() ==
      'CONNECTED'
    ) {
      const {fName, lName, email, password} = registrationData;
      const requestPayload = {
        fName: fName,
        lName: lName,
        email: email,
        password: password,
        metadata: data.metadata,
      };
      AppAction.register(requestPayload, navigation);
      navigation.navigate('PlaidRegistration');
    }
  };
  console.log('STATUS', status);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      {/* <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <BackButton
          goBack={() => {
            navigation.pop();
          }}
        />
      </View> */}
      {/* <View style={{flex: 0.9}}> */}
      <PlaidAuthenticator
        env="sandbox"
        onMessage={(data) => _onMessage(data)}
        publicKey={PLAID_PUBLIC_KEY}
        product={'auth,transactions'}
        onLoad={() => _onLoad()}
        onLoadStart={() => _onLoadStart()}
        onLoadEnd={() => _onLoadEnd()}
      />
      {/* </View> */}
    </View>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  AppAction: bindActionCreators(AppAction, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PlaidRegistration);
