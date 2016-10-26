'use strict';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

class TodoRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var icon = this.props.completed ? require('../img/complete-icon.png') : require('../img/incomplete-icon.png');
    var completedStyle = this.props.completed ? styles.todoItemTitleCompleted : null;

    return (
      <View style={styles.container}>
        <View style={styles.leftPart}>
          <TouchableHighlight
            onPress={() => { this.props.onToggleClick(this.props.id) }}
            style={{ padding: 5, borderRadius: 4, }}
            activeOpacity={0.5}
            underlayColor="#d9d9d9"
          >
            <Image source={icon} style={styles.itemStatus} />
          </TouchableHighlight>
          <Text style={[styles.todoItemTitle, completedStyle]}>{this.props.title}</Text>
        </View>
        <View style={styles.rightPart}>
          <TouchableHighlight
            onPress={() => { this.props.onDeleteClick(this.props.id) }}
            style={{ padding: 5, borderRadius: 4, }}
            activeOpacity={0.5}
            underlayColor="#f2f2f2"
          >
            <Image source={require('../img/delete-icon.png')} style={styles.itemDelete} />
          </TouchableHighlight>
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