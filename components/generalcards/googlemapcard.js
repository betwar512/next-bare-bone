import React,{ Component } from "react";
import GoogleMapReact from 'google-map-react';
import { Config } from "../../config/Config";


const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapCard extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11,
        marker:{
          lat: 59.955413,
          lng: 30.337844,
          name: "My Marker"
        }
      };


    render(){
        return(  // Important! Always set the container height explicitly
            <div style={{ height: '70vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: Config.GOOGLE_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <AnyReactComponent
                  lat={this.props.marker.lat}
                  lng={this.props.marker.lng}
                  text= {this.props.marker.name}
                />
              </GoogleMapReact>
            </div>
            )
    }
}


export default GoogleMapCard