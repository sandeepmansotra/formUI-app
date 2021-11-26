import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import TextBox from './TextBox';
import {theme} from './theme';

const {width} = Dimensions.get('window');

export default class Payments extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Add Payment Details </Text>

        <TextBox style={{marginVertical: 5}} placeholder="Name on the card" />
        <TextBox
          style={{marginVertical: 5}}
          placeholder="16 digit card number"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextBox
            style={{width: width * 0.43, marginVertical: 5}}
            placeholder="Expiration date"
          />
          <TextBox
            style={{width: width * 0.43, marginVertical: 5}}
            placeholder="CVV"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.secondary,
    marginVertical: 10,
  },
});
