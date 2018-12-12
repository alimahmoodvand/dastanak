

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {connect, Provider} from "react-redux";
import {Drawer, Router, Scene} from "react-native-router-flux";
import Home from './pages/home/home'
import Splash from './pages/splash/splash'
import DrawerLayout from './components/drawer/drawer'
import PStorage from "./redux/store";

type Props = {};
export default class App extends Component<Props> {
    render() {
        const RouterRedux = connect()(Router);
        return (
            <Provider store={PStorage}>
                <RouterRedux>
                    <Scene key="root" hideNavBar initial>
                        <Drawer
                            key="drawer"
                            drawerPosition="right"
                            contentComponent={DrawerLayout}
                            hideNavBar={true}
                        >
                            <Scene key="homep" hideNavBar component={Home} title="خانه">
                            </Scene>
                        </Drawer>
                        <Scene key="splashp" hideNavBar component={Splash} initial title="خانه">
                        </Scene>
                    </Scene>
                </RouterRedux>
            </Provider>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
