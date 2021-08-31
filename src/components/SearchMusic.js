import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../styles';
import {Layout} from '../styles/Layout';

const SearchMusic = props => {
  const [text, setText] = useState('');

  return (
    <View style={[Layout.containerRow, styles.containerSearch]}>
      <TextInput
        placeholder={'Search song or artist...'}
        placeholderTextColor={Colors.mainColor2}
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
      <TouchableOpacity onPress={() => props.getMusic(text)}>
        <Text style={[Layout.button, styles.cari]}>Cari</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchMusic;

const styles = StyleSheet.create({
  containerSearch: {
    //backgroundColor: 'blue',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderColor: Colors.mainColor2,
    borderWidth: 1,
    width: '80%',
    paddingVertical: 5,
    borderRadius: 4,
    marginRight: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  cari: {
    borderWidth: 1,
    borderColor: Colors.mainColor2,
  },
});
