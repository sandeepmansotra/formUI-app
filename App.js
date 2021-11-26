import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BillingAddress from './BillingAddress';
import Header from './Header';
import Payments from './Payments';
import {theme} from './theme';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.layout}>
        <Header />
        <Payments />
        <BillingAddress />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.secondary,
    marginVertical: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
});
