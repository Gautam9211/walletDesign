import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image ,TouchableOpacity} from 'react-native';
// You can import supported modules from npm
import { TextInput, Button, Card } from 'react-native-paper';

import CheckBox from 'react-native-check-box';

export default function App() {
  const [tokenAddress, setTokenAddress] = React.useState(
    '0x00kdgffdkdkjsmcmckmc'
  );
  const [checked, setChecked] = React.useState(false);
  const [transactionPhase, setTransactionPhase] = React.useState(2);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeading}>Send</Text>
      <Text style={styles.label}>Send By Token Name</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          height: 60,
        }}
        right={
          <TextInput.Icon
            style={{ marginTop: 15 }}
            onPress={() => setTokenAddress('')}
            icon="close"
          />
        }
        outlineColor="#EEE5E5" // Default outline color
        activeOutlineColor="#EEE5E5" // Outline
        mode="outlined"
        value={tokenAddress}
        onChangeText={(text) => setTokenAddress(text)}
      />
      <Text style={styles.label}>Assets</Text>
      <Card
        style={{
          height: 60,
          marginVertical: 10,
          borderColor: '#EEE5E5',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/ellipse.png')}
            />
            <Text style={{ marginVertical: 20, fontSize: 18 }}>USDT</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{ color: '#717171', fontSize: 18 }}>Balance</Text>
            <Text style={{ color: '#717171', fontSize: 12 }}>100 USDT</Text>
          </View>
        </View>
      </Card>
      <Text style={styles.label}>Enter Amount</Text>
      <Card
        style={{
          height: 60,
          marginVertical: 10,
          borderColor: '#EEE5E5',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/ellipse.png')}
            />
            <Text style={{ marginVertical: 20, fontSize: 18 }}>USDT</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text style={{ color: '#717171' }}>20 USDT</Text>
            <Text style={{ color: '#717171' }}>$100 USD</Text>
          </View>
        </View>
      </Card>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: -5,
        }}>
        <CheckBox
          rightTextStyle={{ color: '#9747FF' }}
          checkBoxColor="#EEE5E5"
          checkedCheckBoxColor="#9747FF"
          style={{ paddingVertical: 2, flex: 0.2 }}
          onClick={() => setChecked(!checked)}
          isChecked={checked}
          rightText={'Max'}
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 2, marginBottom: 10 }}>
        {['Slow', 'Average', 'Fast'].map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setTransactionPhase(index);
              }}
              style={{
                borderColor: '#A1257D',
                backgroundColor: transactionPhase == index ? '#A1257D' : '#fff',
                height: 30,
                minWidth: 20,
                padding: 6,
                borderWidth: 1,
                borderRadius: 5,
                marginLeft: index ? 20 : 0,
                fontSize: 10,
              }}>
              <Text
                style={{
                  color: transactionPhase == index ? '#fff' : '#000',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.label}>Transaction Fee</Text>
      <Card style={{ height: 60, marginVertical: 10, borderColor: '#EEE5E5' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              marginVertical: 20,
              fontSize: 18,
              textAlign: 'right',
              flex: 1,
              marginRight: 10,
            }}>
            USDT
          </Text>
        </View>
      </Card>

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
    marginHorizontal: 30,
  },
  mainHeading: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 25,
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
    marginTop: 25,
    borderColor: '#61499D',
    borderWidth: 1.5,
    backgroundColor: '#A1257D',
  },
  tokenIcon: {
    height: 30,
    width: 30,
    marginLeft: 15,
    marginTop: 13,
    marginRight: 5,
  },
});
