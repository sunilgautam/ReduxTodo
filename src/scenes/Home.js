'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

import TodoList from '../components/TodoList';
import InputSection from '../components/InputSection';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InputSection {...this.props} />
        <TodoList {...this.props} />
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
});

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);