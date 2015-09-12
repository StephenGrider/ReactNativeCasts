// Import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// Create our component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      A day of the week
    </Text>
  }
});

// Style our component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
