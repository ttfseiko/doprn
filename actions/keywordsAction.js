var types = require('./actionTypes');
exports.getKeywords = function getKeywords() {
    return dispatch => {
        dispatch({type: types.MAP_GET_KEYWORDS});
    };
}
