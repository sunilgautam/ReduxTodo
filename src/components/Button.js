import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableHighlight
      style={[styles.container, styles.buttonStyleBlue]}
      onPress={() => {}}
      activeOpacity={0.5}
      underlayColor={buttonVariants.buttonStyleBlue.borderColor}
      {...props}
    >
      <Text style={styles.text}>Add</Text>
    </TouchableHighlight>
  );
}

const buttonVariants = {
  buttonStyleOrange: {
    borderColor: '#d35400',
    backgroundColor: '#e98b39'
  },
  buttonStyleRed: {
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c'
  },
  buttonStyleGreen: {
    borderColor: '#16a085',
    backgroundColor: '#1abc9c'
  },
  buttonStyleBlue: {
    borderColor: '#2980b9',
    backgroundColor: '#3498db'
  },
  buttonStylePurple: {
    borderColor: '#8e44ad',
    backgroundColor: '#9b59b6'
  },
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  ...buttonVariants
});

export default Button;
