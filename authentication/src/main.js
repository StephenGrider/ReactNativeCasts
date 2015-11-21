var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize("epHqnJOxMHEKGloGBgZCpn6SIKHdxX5q97a5iVMj", "uZXxWDuXj9msgTzSQAtPKYmWnBWooKGPsU5k7Bp4");
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
