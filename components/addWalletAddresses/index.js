import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { useState } from 'react';
  // You can import supported modules from npm
  import { Button, TextInput } from 'react-native-paper';
  
  
  export default function App() {
    const [walletAddress1, setWalletAddress1] = useState('');
    const [walletAddress2, setWalletAddress2] = useState('');
    const [walletAddress3, setWalletAddress3] = useState('');
  
    const clearText = (addressType) => {
      switch (addressType) {
        case 'address1':
          setWalletAddress1('');
          break;
        case 'address2':
          setWalletAddress2('');
          break;
  
        case 'address3':
          setWalletAddress3('');
          break;
      }
    };
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
              top: 15,
              marginBottom: 20,
            }}>
            Add Address
          </Text>
          <Image style={{marginTop:20}} source={require('./assets/addIcon.png')} />
        </View>
  
        <View>
          <Text style={styles.label}>Wallet Address 1</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
              marginVertical: 5,
              marginBottom: 10,
            }}
            keyboardType="email-address"
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={walletAddress1}
            onChangeText={(text) => setWalletAddress1(text)}
          />
          <TouchableOpacity
            onPress={() => clearText('address1')}
            style={{ position: 'absolute', top: 55, right: 15 }}>
            <Image
              style={{ height: 14, width: 14 }}
              source={require('./assets/clearIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Wallet Address 2</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
              marginVertical: 5,
              marginBottom: 10,
            }}
            keyboardType="email-address"
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={walletAddress2}
            onChangeText={(text) => setWalletAddress2(text)}
          />
          <TouchableOpacity
            onPress={() => clearText('address2')}
            style={{ position: 'absolute', top: 55, right: 15 }}>
            <Image
              style={{ height: 14, width: 14 }}
              source={require('./assets/clearIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Wallet Address 3</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
              marginVertical: 5,
              marginBottom: 10,
            }}
            keyboardType="email-address"
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={walletAddress3}
            onChangeText={(text) => setWalletAddress3(text)}
          />
          <TouchableOpacity
            onPress={() => clearText('address1')}
            style={{ position: 'absolute', top: 55, right: 15 }}>
            <Image
              style={{ height: 14, width: 14 }}
              source={require('./assets/clearIcon.png')}
            />
          </TouchableOpacity>
        </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button
              mode="outlined"
              style={[styles.button, { backgroundColor: '#fff' }]}
              labelStyle={{ color: '#A1257D', fontSize: 16 }}
              onPress={() => console.log('Pressed')}>
              Cancel
            </Button>
            <Button
              mode="contained"
              labelStyle={{ fontSize: 16 }}
              style={styles.button}
              onPress={() => console.log('Pressed')}>
              Add
            </Button>
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      marginHorizontal: 30,
    },
    label: {
      backgroundColor: 'white',
      paddingHorizontal: 8,
      fontSize: 16,
      marginTop: 10,
      color: '#737373',
    },
      button: {
      width: '47%',
      borderRadius: 30,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      borderColor: '#61499D',
      borderWidth: 1.5,
      backgroundColor: '#A1257D',
    },
  });
  