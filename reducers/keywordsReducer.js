var types = require('../actions/actionTypes')

module.exports = function keywords(state = {
    keywords: []
}, action) {
    switch (action.type) {
        case types.MAP_GET_KEYWORDS:
        {
            console.log('33333333333');
            return {
                ...state,
                keywords:['饭店','银行']
            };
        }
        default:
        {
            return state;
        }
    }
};
