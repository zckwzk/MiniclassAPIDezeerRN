import React from 'react';
import {StyleSheet, View, Text, Image, Button, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(70,15,12,0.5)',
  },
  imageCommon: {height: 40, width: 40},
  imageHappy: {height: 80},
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  subcontainer: {
    backgroundColor: 'lightblue',
    width: '20%',
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  header: {width: '100%', backgroundColor: 'lightblue', paddingVertical: 20},
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  imageHeader: {
    width: '100%',
    // Without height undefined it won't work
    height: 80,
    // aspectRatio: 1000 / 664,
  },
  cardContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
      <Image
        style={styles.imageHeader}
        source={require('./src/images/lake.jpg')}
        resizeMode={'repeat'}
      />
    </View>
  );
};

const Card = ({name, work = 'Mobile Developers'}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{name ? name : 'Mini Class Default'}</Text>
      <Text style={{textAlign: 'center'}}>{work}</Text>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const LearningReactNative = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <Card name={'Johnson W'} />
        <Card work={'QA Test'} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};

export default LearningReactNative;

// <View>
// <Text style={styles.title}>Hallo World</Text>
// <Image
//   style={styles.imageCommon}
//   source={{
//     uri: 'https://reactnative.dev/img/tiny_logo.png',
//   }}
// />
// <Image
//   style={[styles.imageCommon, {width: 70}, styles.imageHappy]}
//   source={require('./src/images/lake.jpg')}
// />

// <Button
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
// </View>

{
  /* <View style={[styles.subcontainer, {backgroundColor: 'red'}]}>
<Text>1</Text>
</View>
<View style={styles.subcontainer}>
<Text>2</Text>
</View>
<View style={[styles.subcontainer]}>
<Text>3</Text>
</View>
<View style={[styles.subcontainer]}>
<Text>3</Text>
</View>
<View style={[styles.subcontainer]}>
<Text>3</Text>
</View>
<View style={[styles.subcontainer]}>
<Text>3</Text>
</View>
<View style={[styles.subcontainer]}>
<Text>3</Text>
</View> */
}
