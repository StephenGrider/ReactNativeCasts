var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f557b20727184231a597c710c8be3106';

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
}
