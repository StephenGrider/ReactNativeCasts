// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
