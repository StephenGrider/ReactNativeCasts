var React = require('react-native');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={this.border('red')}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of Laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton: function() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  },
  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire the screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
