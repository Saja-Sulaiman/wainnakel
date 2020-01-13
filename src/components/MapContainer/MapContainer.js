import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
}


export class MapContainer extends Component {
  //state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  // componentDidMount(props) {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;

  //       this.setState({
  //         userLocation: { lat: latitude, lng: longitude },
  //         loading: false
  //       });
  //     },
  //     () => {
  //       this.setState({ loading: false });
  //     }
  //   );
  // }

  render() {
    //const { loading, userLocation } = this.state;
    const { google, lat, lon } = this.props;

    // if (loading) {
    //   return null;
    // }

    return (
      <Map 
        google={google}
        initialCenter={{lat: 21.6005218, lng: 39.1235634}}
        zoom={17} 
        style={style}
        zoomControl={false}
        mapTypeControl ={false}
        scaleControl ={false}
        streetViewControl ={false}
        fullscreenControl={false}>

        <Marker position={{lat: lat, lng: lon}} />
      </Map>
    );
  }
}
  
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCm13hxy8hO377LOKHRrukdyNpEipy2Edo')
})(MapContainer)