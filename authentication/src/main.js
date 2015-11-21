var React = require('react-native');
var {
  View,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>I am on both iOS and Andrdoid!</Text>
      </View>
    )
  }
});

var styles = Stylesheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
