import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';

function Contacts({ navigation }) {
  const [showContacts, setShowContacts] = React.useState(true);

  return (
    <View style={styles.container}>
      <View style={{ height: '90%' }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            top: 15,
            marginBottom: 20,
          }}>
          Contacts
        </Text>
        {!showContacts ? (
          <Text> There is no contact in your account</Text>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddEditContact', {
                  name: 'Gautam Agarwal',
                  address: '0x00kshfdjsfgsgfhsfhsfdsslakjlam',
                  memo: 'Brother Account',
                  type: 'edit',
                });
              }}
              style={{
                minHeight: 60,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 40, margin: 4 }}
                source={{
                  url: 'https://img.freepik.com/free-photo/3d-rendering-cute-boy-city-night_1142-40766.jpg',
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#0B212D', fontSize: 20 }}>
                  Gautam Agarwal
                </Text>
                <Text style={{ color: '#0B212D', fontSize: 12 }}>
                  0x00kshfdjsfgsgfhsfhsfdsslakjlam
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                minHeight: 60,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 40, margin: 4 }}
                source={{
                  url: 'https://static.vecteezy.com/system/resources/thumbnails/029/364/950/small/3d-carton-of-boy-going-to-school-ai-photo.jpg',
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#0B212D', fontSize: 20 }}>
                  Gaurav Mittal
                </Text>
                <Text style={{ color: '#0B212D', fontSize: 12 }}>
                  0x00kshfdjsfgsgfhsfhsfdsslakjlam
                </Text>
              </View>
            </View>
          </>
        )}

        <Button
          onPress={() => {
            setShowContacts((prev) => !prev);
          }}
          style={{ marginTop: 130 }}>
          {!showContacts ? 'Show Contacts' : 'Hide'}
        </Button>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddEditContact', { type: 'add' })}>
        <Text style={styles.buttonLabel}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Contacts;
