import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';


const AppNavigator = createStackNavigator({
    
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    },

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    }

}, {});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;