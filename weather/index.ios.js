var React = require('react-native');
var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

var Weather = React.createClass({
  render: function() {
    return <MapView
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  },
  onRegionChangeComplete: function(region) {
    console.log(region);
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
