import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput, Button } from 'react-native-paper';
const data = [
  { label: 'Bitcoin', value: '1' },
  { label: 'Ethereum', value: '2' },
  { label: 'Ripple', value: '3' },
  { label: 'BNB Smart Chain', value: '4' },
  { label: 'Polygon', value: '5' },
  { label: 'TRON', value: '6' },
];

export default function AddNewToken({ navigation }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [tokenAddress, setTokenAddress] = React.useState('');
  const [tokenSymbol, setTokenSymbol] = React.useState('');
  const [tokenDecimal, setTokenDecimal] = React.useState('');

  const renderLabel = (label) => {
    return (
      <Text style={[styles.label, isFocus && { color: '#A1257D' }]}>
        {label}
      </Text>
    );
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainHeading}>Add New Token</Text>
        <View style={{ marginHorizontal: 30 }}>
          {renderLabel('Select Network')}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: '#A1257D' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={[
              styles.iconStyle,
              isFocus && { borderColor: '#A1257D' },
            ]}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Network' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <Text style={styles.label}>Token Address</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
            }}
            placeholder={'Enter Token Address'}
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={tokenAddress}
            onChangeText={(text) => setTokenAddress(text)}
          />
          <Text style={styles.label}>Token Symbol</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
            }}
            placeholder={'Enter Token Symbol'}
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={tokenSymbol}
            onChangeText={(text) => setTokenSymbol(text)}
          />
          <Text style={styles.label}>Token Decimal</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
            }}
            placeholder={'Enter Token Decimal'}
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            keyboardType="numeric"
            returnKeyType="done"
            value={tokenDecimal}
            onChangeText={(text) => setTokenDecimal(text)}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button
              mode="outlined"
              style={[styles.button, { backgroundColor: '#fff' }]}
              labelStyle={{ color: '#A1257D', fontSize: 16 }}
              onPress={() => navigation.pop()}>
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
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  mainHeading: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  dropdown: {
    height: 55,
    borderColor: '#EEE5E5',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  label: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 16,
    marginTop: 10,
    color: '#737373',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#737373',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
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
