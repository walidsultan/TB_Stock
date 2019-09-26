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
import ProductContract from '../contracts/productContract';
import ProductDetails from './productDetails';


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
                    return <Products  onChangeView={(e,w)=>this.setProductDetailsView(e,w)} productsCategory={this.state.category}></Products>;
            case PageView.ProductDetails:
                return <ProductDetails  product={this.state.productDetails} ></ProductDetails>;
            
            default:
                return <Welcome onChangeView={(e,w)=>this.setProductsView(e,w)} ></Welcome>;
        }
    }


    setProductDetailsView(view: PageView,product:ProductContract) {
        let newState = Object.assign(this.state, { pageView: view,productDetails: product  });
        this.setState(newState);
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
            case PageView.ProductDetails:
                this.setProductsView(PageView.Products,this.state.category);
                break;    
            default:
             this.setView(PageView.Welcome);
        }
        return true;
    }
    componentDidUpdate() {
    }

}