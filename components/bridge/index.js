import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { TextInput, Button } from 'react-native-paper';

import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Bitcoin', value: '1' },
  { label: 'Ethereum', value: '2' },
  { label: 'Ripple', value: '3' },
  { label: 'BNB Smart Chain', value: '4' },
  { label: 'Polygon', value: '5' },
  { label: 'TRON', value: '6' },
];

const tokenData = [
  { label: 'Bitcoin', value: '1' },
  { label: 'Ethereum', value: '2' },
  { label: 'Ripple', value: '3' },
  { label: 'BNB Smart Chain', value: '4' },
  { label: 'Polygon', value: '5' },
  { label: 'TRON', value: '6' },
];

export default function App() {
  const [network, setNetwork] = useState(null);
  const [networkIsFocus, setNetworkIsFocus] = useState(false);
  const [token, setToken] = useState(null);
  const [tokenIsFocus, setTokenIsFocus] = useState(false);
  const [swapConvertedAmount, setSwapConvertedAmount] = useState('');

  const renderLabel = (label, isFocus) => {
    return (
      <Text style={[styles.label, isFocus && { color: '#A1257D' }]}>
        {label}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeading}>Bridge</Text>
      {renderLabel('Select Network', networkIsFocus)}
      <Dropdown
        style={[styles.dropdown, networkIsFocus && { borderColor: '#A1257D' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[
          styles.iconStyle,
          networkIsFocus && { borderColor: '#A1257D' },
        ]}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!networkIsFocus ? 'Select Network' : '...'}
        searchPlaceholder="Search..."
        value={network}
        onFocus={() => setNetworkIsFocus(true)}
        onBlur={() => setNetworkIsFocus(false)}
        onChange={(item) => {
          setNetwork(item.value);
          setNetworkIsFocus(false);
        }}
      />
      {renderLabel('Select Token', tokenIsFocus)}
      <Dropdown
        style={[styles.dropdown, tokenIsFocus && { borderColor: '#A1257D' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[
          styles.iconStyle,
          tokenIsFocus && { borderColor: '#A1257D' },
        ]}
        data={tokenData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!tokenIsFocus ? 'Select Token' : '...'}
        searchPlaceholder="Search..."
        value={token}
        onFocus={() => setTokenIsFocus(true)}
        onBlur={() => setTokenIsFocus(false)}
        onChange={(item) => {
          setToken(item.value);
          setTokenIsFocus(false);
        }}
      />
      <View>
        <TextInput
          style={styles.textInput}
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          keyboardType="numeric"
          right={true}
          value={swapConvertedAmount}
          returnKeyType="done"
          onChangeText={(text) => setSwapConvertedAmount(text)}
        />
        <Text style={{ top: 25, right: 8, position: 'absolute', fontSize: 16 }}>
          {'USDT'}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Image source={require('./assets/swap.png')} />
      </View>
      {renderLabel('Select Network', networkIsFocus)}
      <Dropdown
        style={[styles.dropdown, networkIsFocus && { borderColor: '#A1257D' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[
          styles.iconStyle,
          networkIsFocus && { borderColor: '#A1257D' },
        ]}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!networkIsFocus ? 'Select Network' : '...'}
        searchPlaceholder="Search..."
        value={network}
        onFocus={() => setNetworkIsFocus(true)}
        onBlur={() => setNetworkIsFocus(false)}
        onChange={(item) => {
          setNetwork(item.value);
          setNetworkIsFocus(false);
        }}
      />
      {renderLabel('Select Token', tokenIsFocus)}
      <Dropdown
        style={[styles.dropdown, tokenIsFocus && { borderColor: '#A1257D' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={[
          styles.iconStyle,
          tokenIsFocus && { borderColor: '#A1257D' },
        ]}
        data={tokenData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!tokenIsFocus ? 'Select Token' : '...'}
        searchPlaceholder="Search..."
        value={token}
        onFocus={() => setTokenIsFocus(true)}
        onBlur={() => setTokenIsFocus(false)}
        onChange={(item) => {
          setToken(item.value);
          setTokenIsFocus(false);
        }}
      />
      <View>
        <TextInput
          style={styles.textInput}
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          keyboardType="numeric"
          right={true}
          value={swapConvertedAmount}
          returnKeyType="done"
          onChangeText={(text) => setSwapConvertedAmount(text)}
        />
        <Text style={{ top: 25, right: 8, position: 'absolute', fontSize: 16 }}>
          {'USDT'}
        </Text>
      </View>
      <Text style={{ color: '#3ECF8E', fontSize: 12 }}>Platform Fees 5%</Text>
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
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    margin: 30,
  },
  mainHeading: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
  dropdown: {
    height: 50,
    borderColor: '#EEE5E5',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 5,
  },
  label: {
    marginTop: 10,
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
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 10,
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '700',
  },
});
