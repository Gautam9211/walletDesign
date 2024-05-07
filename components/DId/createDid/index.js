import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput, Button } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

const data = [
  { label: 'Bitcoin', value: '1' },
  { label: 'Ethereum', value: '2' },
  { label: 'Ripple', value: '3' },
  { label: 'BNB Smart Chain', value: '4' },
  { label: 'Polygon', value: '5' },
  { label: 'TRON', value: '6' },
];

const countries = [
  { label: 'India', value: '1' },
  { label: 'Dubai', value: '2' },
  { label: 'Malaysia', value: '3' },
  { label: 'America', value: '4' },
  { label: 'Sweden', value: '5' },
  { label: 'Russia', value: '6' },
];

const docs = [
  { label: 'AAdhar', value: '1' },
  { label: 'Pan', value: '2' },
  { label: 'Driving Licence', value: '3' },
  { label: 'Passport', value: '4' },
];

export default function CreateDIDScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [countryFocus, setCountryFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [yearToRegister, setYearToRegister] = useState(null);
  const [yearToRegisterFocus, setYearToRegisterFocus] = useState(null);
  const [listOfDocuments, setListOfDocuments] = useState(null);
  const [listOfDocumentsFocus, setListOfDocumentsFocus] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [totalDue, setTotalDue] = useState('');
  const [isChecked, setChecked] = useState(false);

  const renderLabel = (label, focus = false) => {
    return (
      <Text style={[styles.label, focus && { color: '#A1257D' }]}>{label}</Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '600',
          top: 15,
          marginBottom: 20,
        }}>
        Create Your DID
      </Text>
      <View style={styles.subContainer}>
        <View style={{ flex: 0.48 }}>
          {renderLabel('Email')}
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
            }}
            placeholder="Your email"
            keyboardType="email-address"
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ flex: 0.48 }}>
          {renderLabel('Country', countryFocus)}
          <Dropdown
            style={[
              styles.dropdown,
              countryFocus && { borderColor: '#A1257D' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={[
              styles.iconStyle,
              countryFocus && { borderColor: '#A1257D' },
            ]}
            data={countries}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!countryFocus ? 'Select Country' : '...'}
            searchPlaceholder="Search..."
            value={country}
            onFocus={() => setCountryFocus(true)}
            onBlur={() => setCountryFocus(false)}
            onChange={(item) => {
              setCountry(item.value);
              setCountryFocus(false);
            }}
          />
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={{ flex: 0.48 }}>
          {renderLabel('Years To Register', yearToRegisterFocus)}
          <Dropdown
            style={[
              styles.dropdown,
              yearToRegisterFocus && { borderColor: '#A1257D' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={[
              styles.iconStyle,
              yearToRegisterFocus && { borderColor: '#A1257D' },
            ]}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={
              !yearToRegisterFocus ? 'Select year to register' : '...'
            }
            searchPlaceholder="Search..."
            value={yearToRegister}
            onFocus={() => setYearToRegisterFocus(true)}
            onBlur={() => setYearToRegisterFocus(false)}
            onChange={(item) => {
              setYearToRegister(item.value);
              setYearToRegisterFocus(false);
            }}
          />
        </View>
        <View style={{ flex: 0.48 }}>
          {renderLabel('List of Documents', listOfDocumentsFocus)}
          <Dropdown
            style={[
              styles.dropdown,
              listOfDocumentsFocus && { borderColor: '#A1257D' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={[
              styles.iconStyle,
              listOfDocumentsFocus && { borderColor: '#A1257D' },
            ]}
            data={docs}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!listOfDocumentsFocus ? 'Select Document' : '...'}
            value={listOfDocuments}
            onFocus={() => setListOfDocumentsFocus(true)}
            onBlur={() => setListOfDocumentsFocus(false)}
            onChange={(item) => {
              setListOfDocuments(item.value);
              setListOfDocumentsFocus(false);
            }}
          />
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={{ flex: 0.48 }}>
          {renderLabel('Total Due')}
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 50,
            }}
            placeholder="Total Due"
            outlineColor="#EEE5E5" // Default outline color
            activeOutlineColor="#EEE5E5" // Outline
            mode="outlined"
            value={totalDue}
            onChangeText={(text) => setTotalDue(text)}
          />
        </View>
        <View style={{ flex: 0.48 }}>
          {renderLabel('Select Token')}
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
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        {renderLabel('Enter Amount')}
        <TextInput
          style={{
            backgroundColor: '#fff',
            height: 50,
          }}
          placeholder="Amount"
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          value={totalDue}
          onChangeText={(text) => setTotalDue(text)}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          style={{
            margin: 8,
          }}
          color={isChecked ? '#A1257D' : undefined}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={{ color: '#737373', fontSize: 16 }}>
          I agree to the terms and conditions{' '}
        </Text>
      </View>
      <Button
        onPress={() => navigation.navigate('Congratulations')}
        mode="outlined"
        labelStyle={{ color: '#fff' }}
        style={styles.button}>
        Mint your did
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    backgroundColor: 'white',
    paddingHorizontal: 7,
    fontSize: 18,
    marginTop: 10,
    color: '#737373',
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  button: {
    width: '100%',
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
