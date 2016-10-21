import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './actions';

class App extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textinput}
            underlineColorAndroid="transparent"
            placeholder="Your next todo ..."
            autoFocus={false}
          />
          <TouchableHighlight
            onPress={() => {}}
            activeOpacity={0.5}
            underlayColor="gray"
          >
            <Text style={styles.button}>Add</Text>
          </TouchableHighlight>
        </View>
        <Text>Content</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  inputContainer: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    flexDirection: 'row',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    borderColor: '#cccccc',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
});

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
