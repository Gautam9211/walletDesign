import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { TextInput, Button } from 'react-native-paper';
  import { useState } from 'react';
  
  const RenderLabel = (label) => {
    return <Text style={{ marginTop: 10 }}>{label}</Text>;
  };
  
  export default function App() {
    const [secretRecoveryPhrase, setSecretRecoveryPhrase] = useState('');
    const [showPhrase, setShowPhrase] = useState(true);
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainHeading}>Import From Secret Recovery Phrase</Text>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {RenderLabel('Secret Recovery Phrase')}
            <TouchableOpacity
              onPress={() => {
                setShowPhrase((prev) => !prev);
              }}>
              <Image
                style={{ marginTop: 10, marginRight: 10 }}
                source={require('./assets/hidden.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            keyboardType="alpha-numeric"
            secureTextEntry={showPhrase}
            right={true}
            value={secretRecoveryPhrase}
            returnKeyType="done"
            onChangeText={(text) => setSecretRecoveryPhrase(text)}
          />
  
          <Image
            style={{ top: 37, right: 3, position: 'absolute' }}
            source={require('./assets/qrcodePhrase.png')}
          />
        </View>
  
        {RenderLabel('New PIN')}
        <TextInput
          style={styles.textInput}
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          keyboardType="alpha-numeric"
          right={true}
          value={pin}
          returnKeyType="done"
          onChangeText={(text) => setPin(text)}
        />
        {RenderLabel('Confirm PIN')}
        <TextInput
          style={styles.textInput}
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          keyboardType="alpha-numeric"
          right={true}
          value={confirmPin}
          returnKeyType="done"
          onChangeText={(text) => setConfirmPin(text)}
        />
        <Button
          mode="contained"
          labelStyle={{ fontSize: 16 }}
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Import
        </Button>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 30,
      padding: 8,
    },
    mainHeading: {
      marginTop: 50,
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 30,
      marginHorizontal: 10,
    },
    textInput: {
      backgroundColor: '#fff',
      height: 50,
      marginBottom: 10,
      textAlign: 'left',
      fontSize: 22,
      fontWeight: '700',
    },
    button: {
      width: '47%',
      borderRadius: 30,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
      borderColor: '#61499D',
      borderWidth: 1.5,
      backgroundColor: '#A1257D',
    },
  });
  