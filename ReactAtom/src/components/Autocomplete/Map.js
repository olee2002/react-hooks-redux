import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

Geocode.setApiKey("AIzaSyCe55hLDn4E4OcI5XnqPqCZjONgyFyEQzo");
Geocode.enableDebug();
class Map extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         address: '',

         mapPosition: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
         },
         markerPosition: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
         }
      }
   }

   componentDidMount() {
      Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
         response => {
            //console.log('res',response);
            const address = response.results[1].formatted_address;

            this.setState({
               address: (address) ? address : '',

            })
         },
         error => {
            console.error(error);
         }
      );
   };

   shouldComponentUpdate(nextProps, nextState) {
      if (
         this.state.markerPosition.lat !== this.props.center.lat ||
         this.state.address !== nextState.address

      ) {
         return true
      } else if (this.props.center.lat === nextProps.center.lat) {
         return false
      }
   }



   onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
   };

   onInfoWindowClose = (event) => {
   };


   onMarkerDragEnd = (event) => {
      //console.log( 'event', event );
      let newLat = event.latLng.lat(),
         newLng = event.latLng.lng();

      Geocode.fromLatLng(newLat, newLng).then(
         response => {
            const address = response.results[0].formatted_address;


            this.setState({
               address: (address) ? address : '',

            })
         },
         error => {
            console.error(error);
         }
      );
   };


   onPlaceSelected = (place) => {
      //console.log('plc',place);
      const address = place.formatted_address

      this.setState({
         address: (address) ? address : '',

      })
   };

   render() {
      const AsyncMap = withScriptjs(
         withGoogleMap(
            props => (
               <GoogleMap
                  defaultZoom={15}
                  defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
               >

                  <InfoWindow
                     onClose={this.onInfoWindowClose}
                     position={{ lat: (this.state.markerPosition.lat + 0.50), lng: this.state.markerPosition.lng }}
                  >
                     <div>
                        <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                     </div>
                  </InfoWindow>



                  <Autocomplete
                     style={{
                        width: '50%',
                        height: '40px',
                        paddingLeft: '16px',
                        marginTop: '2px',
                        marginBottom: '100px'
                     }}
                     onPlaceSelected={this.onPlaceSelected}
                     types={['(regions)']}

                  />

               </GoogleMap>
            )
         )
      );
      let map;
      if (this.props.center.lat !== undefined) {
         map = <div>
            <AsyncMap
               googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCe55hLDn4E4OcI5XnqPqCZjONgyFyEQzo&libraries=places"
               loadingElement={
                  <div style={{ height: `100%` }} />
               }
               containerElement={
                  <div style={{ height: this.props.height }} />
               }
               mapElement={
                  <div style={{ height: `100%` }} />
               }

            />
         </div>
      } else {
         map = <div style={{ height: this.props.height }} />
      }
      return (map)
   }
}
export default Map