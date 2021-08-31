import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '586s94a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694ae0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694af0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
  {
    id: '58694da0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  },
];

const Item = ({title, uri, rank, props, index}) => {
  //console.log(props);
  return (
    <View
      style={[
        styles.containerCard,
        {backgroundColor: props.activeIndex == index ? 'green' : 'black'},
      ]}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: uri,
        }}
      />
      <View style={{width: '50%'}}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.titleSub}>{title}</Text>
      </View>
      <Text style={styles.rankText}>Rank {rank}</Text>
    </View>
  );
};

const ListingMusic = props => {
  const renderItem = ({item, index}) => (
    <Item
      title={item.title}
      uri={item.album.cover_small}
      rank={item.rank}
      props={props}
      //index={index}
    />
  );
  return (
    <View style={styles.container}>
      {props.isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={props.musicData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default ListingMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerCard: {
    flexDirection: 'row',
    marginBottom: 10,
    //backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    borderColor: Colors.mainColor2,
    borderWidth: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.mainColor2,
  },
  titleSub: {
    color: 'white',
    fontSize: 12,
  },
  rankText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
});
