import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles';
import {Layout} from '../styles/Layout';

const ControllerMusic = props => {
  return (
    <View style={[Layout.containerRow, styles.blockControl]}>
      <TouchableOpacity onPress={() => props.onPlay()}>
        <Text style={styles.button}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPause()}>
        <Text style={styles.button}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onNext()}>
        <Text style={styles.button}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.onPrev()}>
        <Text style={styles.button}>Prev</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ControllerMusic;

const styles = StyleSheet.create({
  blockControl: {
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    color: 'white',
    borderColor: Colors.mainColor2,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 60,
    textAlign: 'center',
  },
});
