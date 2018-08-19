import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import GoogleMapReact from 'google-map-react';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

const Marker = () => <Icon name='marker' size='big' color='red' />

class TestComponent extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = { 
    address: "",
    scriptLoaded: false
  };

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  handleScriptCreate = () => {
    this.setState({ scriptLoaded: false })
  }
  
  handleScriptError = () => {
    this.setState({ scriptError: true })
  }
  
  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true })
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.handleChange,
      onSelect: this.handleSelect
    };
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <div>
        {/* <Script 
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyAwt37MFdfi0Hm0i09FCvoDKQM6jN7AJeU&libraries=places'
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
        { this.state.scriptLoaded && <PlacesAutocomplete
          inputProps={inputProps}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete> }
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAwt37MFdfi0Hm0i09FCvoDKQM6jN7AJeU' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
