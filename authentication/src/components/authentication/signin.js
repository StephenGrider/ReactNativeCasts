var React = require('react-native');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
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
