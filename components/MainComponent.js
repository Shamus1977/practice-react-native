import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const DirectoryNavigator = createStackNavigator({

        Directory: {screen: Directory},
        CampsiteInfo: {screen: CampsiteInfo}
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            }
        }
    }
);

const HomeNavigator = createStackNavigator({

        Home: {screen: Home},
    },
    {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            }
        }
    }
);

const MainNavigator = createDrawerNavigator({

        Home: {screen: HomeNavigator},
        Directory: { screen: DirectoryNavigator},
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);


const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
   
    

    render() {
        return (
            <View style = {{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
                }} 
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;

 