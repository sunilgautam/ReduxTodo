'use strict';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

class TodoRow extends Component {
  render() {
    var icon = this.props.completed ? require('../img/complete-icon.png') : require('../img/incomplete-icon.png');
    var completedStyle = this.props.completed ? styles.todoItemTitleCompleted : null;

    return (
      <View style={styles.container}>
        <View style={styles.leftPart}>
          <Image source={icon} style={styles.itemStatus} />
          <Text style={[styles.todoItemTitle, completedStyle]}>{this.props.title}</Text>
        </View>
        <View style={styles.rightPart}>
          <Image source={require('../img/delete-icon.png')} style={styles.itemDelete} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftPart:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightPart:{
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
  itemStatus: {

  },
  itemDelete: {

  },
});

export default TodoRow;