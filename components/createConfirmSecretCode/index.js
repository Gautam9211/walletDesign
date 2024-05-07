import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { useRef } from 'react';
  
  export default function App() {
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
    inputRefs.current[index].setNativeProps({ selection: { start: value.length, end: value.length } });
  
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
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 80,
            fontWeight: '700',
          }}>
          Create Secret Code
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: '#737373',
            textAlign: 'center',
            marginTop: 6,
            marginBottom: 20,
          }}>
          Craft Your Unique Recovery Phrase for Unparalleled Security!
        </Text>
  
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
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 20,
                marginTop: 14,
                fontWeight: '700',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      marginTop:100
    },
    button: {
      backgroundColor: '#A1257D',
      height: 50,
      width: '30%',
      borderRadius: 30,
    },
    container2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 15,
    },
    input2: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      textAlign: 'center',
      borderColor: "#9747FF"
    },
  });
  