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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from './actions';

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
  }

  renderRow(rowData) {
    var icon = rowData.completed ? require('./img/complete-icon.png') : require('./img/incomplete-icon.png');
    var completedStyle = rowData.completed ? styles.todoItemTitleCompleted : null;
    return (
      <View style={styles.todoItem}>
        <View style={styles.todoItemLeft}>
          <Image source={icon} style={styles.todoItemStatus} />
          <Text style={[styles.todoItemTitle, completedStyle]}>{rowData.title}</Text>
        </View>
        <View style={styles.todoItemRight}>
          <Image source={require('./img/delete-icon.png')} style={styles.todoItemDelete} />
        </View>
      </View>
    );
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
          renderRow={this.renderRow}
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
  todoItem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoItemLeft:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoItemRight:{
    alignItems: 'flex-end',
    alignItems: 'center',
  },
  todoItemTitle: {
    paddingLeft: 10,
    fontSize: 18,
    height: 30,
  },
  todoItemTitleCompleted: {
    textDecorationLine: 'line-through',
  },
  todoItemStatus: {

  },
  todoItemDelete: {

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
