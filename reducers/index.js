var { combineReducers } = require('redux');
var placesReducer = require('./placesReducer');
var keywordsReducer = require('./keywordsReducer');

var rootReducer = combineReducers({
  placesReducer,
  keywordsReducer
});

module.exports = rootReducer;