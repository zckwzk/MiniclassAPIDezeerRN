import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layout} from '../styles/Layout';
import Slider from '@react-native-community/slider';
import {Colors} from '../styles';

const HeaderMusic = props => {
  return (
    <View style={[styles.containerMusic]}>
      <Text numberOfLines={1} style={styles.titleSong}>
        {props.title}
      </Text>
      <Text style={styles.artistText}>{props.artist}</Text>
      <View
        style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Slider
          style={styles.slider}
          value={props.position}
          minimumValue={0}
          maximumValue={props.duration}
          minimumTrackTintColor={Colors.mainColor2}
          maximumTrackTintColor={Colors.mainColor2}
        />
        <View style={styles.containerTime}>
          <Text style={styles.textTime}>
            {new Date(props.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.textTime}>
            {new Date((props.duration - props.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderMusic;

const styles = StyleSheet.create({
  containerMusic: {
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSong: {
    fontSize: 24,
    color: Colors.mainColor2,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  artistText: {
    color: 'white',
    fontWeight: 'bold',
  },
  containerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  slider: {
    width: '100%',
    marginTop: 20,
  },
  textTime: {
    fontWeight: 'bold',
    color: 'white',
  },
});
