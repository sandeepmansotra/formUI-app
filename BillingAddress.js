import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import TextBox from './TextBox';
import {theme} from './theme';

const {width} = Dimensions.get('window');

export default class BillingAddress extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Billing Address </Text>

        <TextBox style={{marginVertical: 5}} placeholder="Street" />
        <TextBox style={{marginVertical: 5}} placeholder="City" />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextBox
            style={{width: width * 0.43, marginVertical: 5}}
            placeholder="State"
          />
          <TextBox
            style={{width: width * 0.43, marginVertical: 5}}
            placeholder="Zipcode"
          />
        </View>
        <TextBox style={{marginVertical: 5}} placeholder="Country" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.secondary,
    marginBottom: 10,
    marginTop: 20,
  },
});
