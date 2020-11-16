import * as types from '../../constants/actionsTypes';
import RestClient from '../../helpers/RestClient';
import OtherHelper from '../../helpers/OtherHelpers';
export function login(requestPayload, navigation) {
  console.log('Payload', requestPayload);
  return async (dispatch) => {
    try {
      dispatch({type: types.LOGIN_REQUEST});
      const response = await RestClient.postCall(
        `api/users/login`,
        requestPayload,
      );
      console.log('Login Response', response);
      if (response.code == 200) {
        dispatch({type: types.LOGIN_SUCCESS});
        navigation.navigate('Dashboard');
      } else {
        OtherHelper.showToastMessage(response.msg);
        dispatch({
          type: types.LOGIN_FAIL,
        });
      }
    } catch (error) {
      console.log('Error', error);
      dispatch({type: types.LOGIN_FAIL});
    }
  };
}
export function register(requestPayload, navigation) {
  console.log('Payload', requestPayload);
  return async (dispatch) => {
    try {
      dispatch({type: types.REGISTER_REQUEST});
      const response = await RestClient.postCall(
        `api/users/register`,
        requestPayload,
      );
      console.log('Register Response', response);
      if (response.code == 200) {
        dispatch({type: types.REGISTER_SUCCESS});
        navigation.navigate('LoginScreen');
      } else {
        console.log('fail');
        dispatch({
          type: types.REGISTER_FAIL,
        });
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log('Error', error);
      dispatch({type: types.REGISTER_FAIL});
      navigation.navigate('PlaidRegistration');
    }
  };
}
export function saveRegistrationData(requestPayload) {
  return async (dispatch) => {
    try {
      dispatch({type: types.SAVE_REGISTRATION_DATA, payload: requestPayload});
    } catch (error) {
      console.log('Error', error);
      dispatch({type: types.SAVE_REGISTRATION_DATA_FAIL});
    }
  };
}
