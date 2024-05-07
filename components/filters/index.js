import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
  } from 'react-native';
  import { useState } from 'react';
  // You can import supported modules from npm
  import { Button } from 'react-native-paper';
  import { Dropdown } from 'react-native-element-dropdown';
  import DateTimePicker from '@react-native-community/datetimepicker';
  
  export default function App() {
    const [selectedCategory, setSelectedCategory] = useState('coins');
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState('Successful');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(false);
      setDate(currentDate);
    };
  
    const data = [
      { label: 'Bitcoin', value: '1' },
      { label: 'Ethereum', value: '2' },
      { label: 'Ripple', value: '3' },
      { label: 'BNB Smart Chain', value: '4' },
      { label: 'Polygon', value: '5' },
      { label: 'TRON', value: '6' },
    ];
  
    var dataCoins = [
      { name: 'Bitcoin', Symbol: 'BTC', value: '1' },
      { name: 'Ethereum', Symbol: 'ETH', value: '2' },
      { name: 'Ripple', Symbol: 'RPE', value: '3' },
      { name: 'BNB Smart Chain', Symbol: 'BNB', value: '4' },
      { name: 'Polygon', Symbol: 'PLY', value: '5' },
      { name: 'TRON', Symbol: 'TRN', value: '6' },
    ];
  
    const RenderUnderLine = () => {
      return (
        <View
          style={{
            height: 2,
            backgroundColor: '#979797',
            marginTop: 1,
            marginLeft: 1,
          }}></View>
      );
    };
  
    const resetAllFilters = () => {
      setSelectedCategory('coins');
      setValue(null);
      setIsFocus(false);
      setTransactionStatus('Successful');
      setDate(new Date());
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 0.9, flexDirection: 'row', margin: 8 }}>
          <View style={{ flex: 0.26, marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                setSelectedCategory('coins');
              }}
              style={{ marginHorizontal: 10, marginVertical: 10 }}>
              <Text style={styles.filterText}>Coin Name</Text>
              {selectedCategory == 'coins' && <RenderUnderLine />}
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => {
                setSelectedCategory('status');
              }}
              style={{ marginHorizontal: 10, marginVertical: 10 }}>
              <Text style={styles.filterText}>Status</Text>
              {selectedCategory == 'status' && <RenderUnderLine />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedCategory('date');
              }}
              style={{ marginHorizontal: 10, marginVertical: 10 }}>
              <Text style={styles.filterText}>Date Range</Text>
              {selectedCategory == 'date' && <RenderUnderLine />}
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 1,
              backgroundColor: '#EEE5E5',
              height: '100%',
            }}></View>
          <View style={{ flex: 0.7, marginTop: 10 }}>
            {selectedCategory === 'coins' && (
              <View>
                <Text
                  style={[
                    styles.label,
                    isFocus && { color: '#A1257D' },
                    { marginLeft: 5 },
                  ]}>
                  Select Coin
                </Text>
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
                  placeholder={!isFocus ? 'Select Coin' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                  selectedOptionStyle={{ backgroundColor: '#EEE5E5' }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: '#EEE5E5',
                      marginVertical: 15,
                      marginLeft: 13,
                      flex: '0.5',
                    }}></View>
                  <Text style={{ color: '#737373', fontSize: 16 }}>
                    {'  '}Or Select Coin From Below{'  '}
                  </Text>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: '#EEE5E5',
                      marginVertical: 15,
                      marginLeft: 1,
                      flex: '0.5',
                    }}></View>
                </View>
                {dataCoins.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setValue(item.value);
                      }}
                      style={{
                        marginVertical: 3,
                        backgroundColor:
                          item.value == value && value ? '#EEE5E5' : '#fff',
                        padding: 10,
                        paddingVertical: 6,
                      }}>
                      <Text
                        style={{
                          color: item.value === value ? '#A1257D' : '#000',
                        }}>
                        {item.name}
                      </Text>
  
                      <Text style={{ color: '#979797' }}>{item.Symbol}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {selectedCategory === 'status' && (
              <View style={{ marginTop: 10 }}>
                {['Pending', 'Failed', 'Successful'].map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setTransactionStatus(item);
                      }}
                      style={{
                        marginVertical: 3,
                        backgroundColor:
                          item == transactionStatus && transactionStatus
                            ? '#EEE5E5'
                            : '#fff',
                        padding: 10,
                        paddingVertical: 12,
                      }}>
                      <Text
                        style={{
                          color: item == transactionStatus ? '#A1257D' : '#000',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {selectedCategory === 'date' && (
              <View style={{ marginTop: 10 }}>
                <Button
                  title="Show DatePicker"
                  onPress={() => setShowDatePicker(true)}
                />
                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            )}
          </View>
        </View>
  
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            mode="outlined"
            style={[styles.button, { backgroundColor: '#fff' }]}
            labelStyle={{ color: '#A1257D', fontSize: 16 }}
            onPress={() => resetAllFilters()}>
            Reset
          </Button>
          <Button
            mode="contained"
            labelStyle={{ fontSize: 16 }}
            style={styles.button}
            onPress={() =>alert("Applied")}>
            Apply
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
    button: {
      width: '45%',
      borderRadius: 30,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
      borderColor: '#61499D',
      borderWidth: 1.5,
      backgroundColor: '#A1257D',
    },
    filterText: { color: '#979797', fontSize: 17 },
    dropdown: {
      height: 50,
      borderColor: '#EEE5E5',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop: 5,
      marginLeft: 10,
    },
    label: {
      backgroundColor: 'white',
      paddingHorizontal: 8,
      fontSize: 16,
      marginTop: 10,
      color: '#737373',
    },
  });
  