import React, { Component } from 'react';
import './styles.css';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Map extends Component {

    static defaultProps = {
        center: { lat: 37.77, lng: -122.41 },
        zoom: 13
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className={'map'}>
                <GoogleMap
                    bootstrapURLKeys={{ key: 'AIzaSyAIp1gbo-KDCOkvms-ezubPN4Ao1BJCQkg' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                </GoogleMap>
            </div>
        );
    }
}

export default Map;
