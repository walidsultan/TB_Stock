import * as React from 'react';
import { View, StyleProp, ViewStyle, StatusBar, AsyncStorage, Alert, BackHandler, Image } from 'react-native';
import * as Expo from "expo";
import RouterState from '../states/RouterState';
import RouterInterface from '../interfaces/RouterInterface';
import { PageView } from '../enums/pageView';
import Welcome from './welcome';
import Products from './products';
import { Category } from '../enums/category';
import WelcomeStyles from '../styles/welcomeStyles';

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
                <Image source={require('../../assets/images/21d1627b.png')} style={WelcomeStyles.background} ></Image>
                {this.getCurrentView()}
            </View>
        );
    }

    getCurrentView() {
        switch (this.state.pageView) {
            case PageView.Welcome:
                return <Welcome onChangeView={(e,w)=>this.setProductsView(e,w)} ></Welcome>;
            case PageView.Products:
                 return <Products productsCategory={this.state.category}></Products>;
            
            default:
                return <Welcome onChangeView={(e,w)=>this.setProductsView(e,w)} ></Welcome>;
        }
    }



    setProductsView(view: PageView,category:Category) {
        let newState = Object.assign(this.state, { pageView: view,category: category  });
        this.setState(newState);
    }

    setView(view: PageView) {
        let newState = Object.assign(this.state, { pageView: view });
        this.setState(newState);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }


    componentWillUnmount() {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress= ()=> {
        switch(this.state.pageView){
            case PageView.Products:
                this.setView(PageView.Welcome);
                break;
            default:
             this.setView(PageView.Welcome);
        }
        return true;
    }
    componentDidUpdate() {
    }

}