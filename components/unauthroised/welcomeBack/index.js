import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import { Button } from 'react-native-paper';
import { useRef } from 'react';

export default function WelcomeBack({ navigation }) {
  const length = 6;

  const inputs = Array(length).fill(0);
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleInputChange = (value, index) => {
    // You can perform validation or other actions here
    console.log(`Input at index ${index} changed: ${value}`);
    inputs[index] = value; // Update the inputs array

    // Set selection to the end of the text
    inputRefs.current[index].setNativeProps({
      selection: { start: value.length, end: value.length },
    });

    if (value && value.length === 1) {
      // If a value is entered, move focus to the next field
      focusInput(index);
    } else if (!value && index > 0) {
      // If the field is empty and not the first field, move focus to the previous field
      inputRefs.current[index - 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].setNativeProps({ text: '' });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ marginTop: 80 }}
          source={require('../../../assets/Frame.png')}
        />
        <Text style={{ fontSize: 30, fontWeight: '700', marginTop: 15 }}>
          Welcome Back!
        </Text>
        <Text style={{ color: '#737373', fontSize: 18, marginTop: 10 }}>
          Enter Your Secret PIN To Login
        </Text>
      </View>
      <View style={styles.container2}>
        {inputs.map((_, index) => (
          <TextInput
            key={index}
            style={styles.input2}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, index)}
            onKeyPress={({ nativeEvent: { key } }) =>
              key === 'Backspace' && handleBackspace(index)
            }
            ref={(ref) => (inputRefs.current[index] = ref)}
            returnKeyType={index === length - 1 ? 'done' : 'next'}
            onSubmitEditing={() => {
              if (index === length - 1) {
                // Handle submit or move to next screen
              } else {
                focusInput(index);
              }
            }}
          />
        ))}
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 20 }}>
        <Button
          onPress={() => {
            if (inputs.join('') == '123456') {
              return navigation.reset({
                index: 0,
                routes: [{ name: 'Authenticated' }],
              });
            } else {
              alert('Kindly Provide Valid PIN');
            }
          }}
          labelStyle={styles.buttonLabel}
          style={styles.button}>
          Login
        </Button>
      </View>

      <Text
        style={{
          fontSize: 17,
          color: '#737373',
          textAlign: 'center',
          marginHorizontal: 40,
          marginTop: 20,
        }}>
        Can't login? You can erase your current wallet and set up a new one
      </Text>
      <Text style={{ color: '#A1257D', marginTop: 10, textAlign: 'center' }}>
        Reset Wallet
      </Text>
    </SafeAreaView>
  );
}
