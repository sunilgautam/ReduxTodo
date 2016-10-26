'use strict';
import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
} from 'react-native';

import TodoRow from './TodoRow';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };

    this.onToggleClick = this.onToggleClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.todos)
    })
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
  }

  onToggleClick(id) {
    this.props.actions.toggleTodo(id);
  }

  onDeleteClick(id) {
    this.props.actions.removeTodo(id);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <TodoRow {...data} onToggleClick={this.onToggleClick} onDeleteClick={this.onDeleteClick} />}
          renderSeparator={this.renderSeparator}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default TodoList;