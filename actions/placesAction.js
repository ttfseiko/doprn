var types = require('./actionTypes');
exports.fetchPlaces = function fetchPlaces(keyword) {
    return dispatch => {
        dispatch({type:types.MAP_FETCHING_PLACES});
        url = 'http://api.map.baidu.com/place/v2/search?q='+keyword+'&region=北京&output=json&ak=GWiiMTxIMUGnf97kQYRx2zpk';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                dispatch(receivePlaces(json));
            })
            .catch(err => {
                console.warn('warinning:' + err);
            })
            .done()
    };
}

function receivePlaces(json) {
    var results = json.results.map(place => place.name);
    return {
        type: types.MAP_RECEIVE_PLACES,
        places: results,
    }
}
