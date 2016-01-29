var types = require('../actions/actionTypes')

module.exports = function places(state = {
    isFetching: false,
    places:[]
}, action) {
    switch (action.type) {
        case types.MAP_FETCHING_PLACES:
            return {
                ...state,
                isFetching: true
            };
        case types.MAP_RECEIVE_PLACES:
        {
            return {
                ...state,
                isFetching: false,
                places: action.places
            };
        }
        default:
        {
            return state;
        }
    }
};
