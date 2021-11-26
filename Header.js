import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from './theme';

export class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Confirm Shipping Address </Text>
        <View style={styles.address}>
          <Text style={styles.description}>123, Pacific BLVD, San Diego</Text>
          <Text style={styles.description}>California 90372</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.secondary,
  },
  address: {
    marginTop: 10,
  },
  description: {
    textSize: 13,
    color: theme.colors.secondary,
  },
  button: {
    marginVertical: 10,
  },
  buttonText: {
    color: theme.colors.primary,
  },
});
