'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

class InputSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
    };

    this.addTodoPressed = this.addTodoPressed.bind(this);
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

  render() {
    return (
      <View style={styles.container}>
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
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
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
});

export default InputSection;