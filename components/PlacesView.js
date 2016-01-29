'use strict';

var React = require('react-native');
var {View, Text, StyleSheet,TouchableOpacity} = React;
var keywordsAction = require('../actions/keywordsAction');
var placesAction = require('../actions/placesAction');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

class PlacesView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.getKeywords();
    }
    render(){
        var places = this.props.isFetching?(<Text>is loading ...</Text>):
                        this.props.places.map(place => {
                            return <Text>{place}</Text>
                        });
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {this.props.keywords.map(keyword => {
                        return <TouchableOpacity style={styles.item} onPress = {() => this.props.fetchPlaces(keyword)}>
                            <Text style={styles.item}>{keyword}</Text>
                        </TouchableOpacity>
                    })}
                </View>
                <View style={styles.list}>
                    {places}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item:{
        flex: 1,
    },
    list:{
        flex: 2,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

function mapStateToProps(state) {
    return {
        ...state.keywordsReducer,
        ...state.placesReducer
    };
}

module.exports = connect(mapStateToProps, {...keywordsAction,...placesAction})(PlacesView);;