import React, { Component } from 'react';
import './Restaurant.css';
import Navigation from './Navigation';
import MapContainer from '../MapContainer/MapContainer';
import SuggestionButton from '../SuggestionButton/SuggestionButton'
import { Icon } from 'antd';


class Restaurant extends Component {

    constructor(){
        super();

        this.state = { 
            userLocation: {},
            restaurant: {}
        }  
    }

    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
      
              this.setState({
                userLocation: { lat: latitude, lng: longitude },
                loading: false
              });
            },
            () => {
              this.setState({ loading: false });
            }
        );
    }
    
    componentDidUpdate(prevProps, prevState) {

        if (prevState.userLocation !== this.state.userLocation) {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = `https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.userLocation.lat},${this.state.userLocation.lng}&get_param=value`;
    
            fetch(proxyurl + url).then((resp) => resp.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }

    render() {
        const { restaurant } = this.state;
        return ( 
            <div className='container'>
                <MapContainer lat={restaurant.lat} lon={restaurant.lon} className='map'/>
                <Navigation />
                <div className='info'>
                    <p className='name'>{restaurant.name}</p>
                    <p className='cat'>{restaurant.rating} | {restaurant.cat}</p>
                    <div className='drawer'>
                        <Icon type="picture" className='icon '/>
                        <Icon type="heart"  className='icon border'/>                        
                        <Icon type="share-alt"  className='icon border'/>
                        <Icon type="info-circle"  className='icon border'/>
                    </div>
                </div>     
                <SuggestionButton className='btn'/>
            </div>
        );
    }
}

export default Restaurant;