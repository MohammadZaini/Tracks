import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreens";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { Provider as AuthProvider } from "./src/screens/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResloveAuthScreen from "./src/screens/ResloveAuthScreen";
import { Provider as LocationProvider } from "./src/screens/context/LocationContext";
import { Provider as TrackProvider } from "./src/screens/context/TrackContext";
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

trackListFlow.navigationOptions = () => {
  return {
      tabBarIcon: <FontAwesome name='th-list' size={20} />
  };
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResloveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),

  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => {setNavigator(navigator)}} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};