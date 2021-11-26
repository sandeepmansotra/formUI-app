import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const TextBox = ({placeholder, style}) => {
  return (
    <View style={[styles.input, style]}>
      <TextInput style={{fontSize: 14}} placeholder={placeholder} />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
});
