import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function Congratulations({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 130, height: 130, marginTop: 80 }}
        source={{
          uri: 'https://i.pinimg.com/originals/15/69/18/1569182838df53706f15f586e602dbd4.gif',
        }}
      />
      <Text style={styles.heading}>Congratulations!</Text>
      <Text style={styles.subHeading}>
        You Have Successfully Created your decentralised Identity
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.textButton}>
        <Text style={styles.text}>Now, Set this Identity as your main Id</Text>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../../assets/nextIcon.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: { fontSize: 35, marginTop: -10 },
  subHeading: {
    color: '#A1257D',
    marginHorizontal: 30,
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
  },
  text: {
    color: '#940569',
    fontSize: 18,
  },
  textButton: { flexDirection: 'row', marginTop: 30, alignItems: 'center' },
});
