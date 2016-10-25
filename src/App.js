import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  ListView,
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './actions';

import TodoRow from './components/TodoRow';

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      todoTitle: '',
      dataSource: ds.cloneWithRows(this.props.todos),
    };

    this.addTodoPressed = this.addTodoPressed.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.todos)
    })
  }

  addTodoPressed() {
    // check blank
    if (!this.state.todoTitle) {
      return;
    }

    const todo = {
      id: Math.random().toString(36),
      title: this.state.todoTitle,
    };
    // call action
    this.props.actions.addTodo(todo);

    // clear text input
    this.setState({ todoTitle: '' });

    // dismiss keyboard
    dismissKeyboard();
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.todoTitle}
            onChangeText={(newTodoTitle) => { this.setState({ todoTitle: newTodoTitle }); }}
            onSubmitEditing={this.addTodoPressed}
            style={styles.textinput}
            underlineColorAndroid="transparent"
            placeholder="Your next todo ..."
            autoFocus={false}
          />
          <TouchableHighlight
            onPress={this.addTodoPressed}
            activeOpacity={0.5}
            style={{ marginLeft: 5,borderRadius: 5, }}
            underlayColor="gray"
          >
            <Text style={styles.button}>Add</Text>
          </TouchableHighlight>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <TodoRow {...data} />}
          renderSeparator={this.renderSeparator}
        />
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
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
