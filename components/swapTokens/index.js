import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
// You can import supported modules from npm
import { TextInput, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'BTC', value: '1' },
  { label: 'ETH', value: '2' },
  { label: 'RLE', value: '3' },
  { label: 'BNB', value: '4' },
  { label: 'PLY', value: '5' },
  { label: 'TRN', value: '6' },
  { label: 'ACE', value: '7' },
  { label: 'USDT', value: '8' },
];

export default function App() {
  const [swapFrom, setSwapFrom] = useState('8');
  const [swapTo, setSwapTo] = useState('7');
  const [swapAmount, setSwapAmount] = useState('10');
  const [swapConvertedAmount, setSwapConvertedAmount] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (swapAmount) {
      let amount = Number(swapAmount) * 0.15;
      setSwapConvertedAmount('' + amount);
    }
  }, [swapAmount]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeading}>Swap</Text>

      <View style={{ marginHorizontal: 20 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#A1257D' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={[styles.iconStyle, isFocus && { borderColor: '#A1257D' }]}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? swapFrom : '...'}
          value={swapFrom}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSwapFrom(item.value);
            setIsFocus(false);
          }}
        />

        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          value={swapAmount}
          onChangeText={(text) => setSwapAmount(text)}
        />

        <Text style={{ top: 40, right: 8, position: 'absolute' }}>
          {data[swapFrom - 1].label}
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('./assets/arrangeCircleIcon.png')}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#A1257D' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={[styles.iconStyle, isFocus && { borderColor: '#A1257D' }]}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? swapTo : '...'}
          value={swapTo}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSwapTo(item.value);
            setIsFocus(false);
          }}
        />
        <TextInput
          style={styles.textInput}
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          keyboardType="numeric"
          right={true}
          editable={false}
          value={swapConvertedAmount}
          onChangeText={(text) => setSwapConvertedAmount(text)}
        />
        <Text style={{ top: 40, right: 8, position: 'absolute' }}>
          {data[swapTo - 1].label}
        </Text>
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
  },
  mainHeading: {
    marginTop: 80,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    width: '44%',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderColor: '#61499D',
    borderWidth: 1.5,
    backgroundColor: '#A1257D',
  },
  dropdown: {
    height: 10,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 5,
    width: '21%',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
});
