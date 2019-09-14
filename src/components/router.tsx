import * as React from 'react';
import { View, StyleProp, ViewStyle, StatusBar, AsyncStorage } from 'react-native';
import * as Expo from "expo";
import RouterState from '../states/RouterState';
import RouterInterface from '../interfaces/RouterInterface';
import { PageView } from '../enums/pageView';
import Welcome from './welcome';

const soundObject = new Expo.Audio.Sound();

export default class Router extends React.Component<RouterInterface, RouterState> {

    constructor(props: any) {
        super(props);
        this.state = new RouterState();
    }

    render() {
        let routerStyle: StyleProp<ViewStyle> = {
            flex: 1
        };
        return (
            <View style={routerStyle}>
                <StatusBar hidden />
                {this.getCurrentView()}
            </View>
        );
    }

    getCurrentView() {
        switch (this.state.pageView) {
            case PageView.Welcome:
                return <Welcome></Welcome>;
            
            default:
                return <Welcome></Welcome>;
        }
    }


    onRedirect(pageView: PageView) {
        this.setView(pageView);
    }


    setView(view: PageView) {
        let newState = Object.assign(this.state, { pageView: view });
        this.setState(newState);
    }


    componentDidUpdate() {
    }

}