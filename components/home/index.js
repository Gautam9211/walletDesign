import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';

// You can import supported modules from npm
import { Card, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const [toggleAmt, setToggleAmt] = useState(true);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('Account 1');

  const accounts = [];

  for (let i = 1; i < 8; i++) {
    accounts.push('Account ' + i);
  }

  const toggleAmount = () => {
    setToggleAmt((prev) => !prev);
  };

  const renderModal = (Content, state, height) => {
    return (
      <Modal backdropOpacity={0.85} isVisible={state}>
        <View style={{ backgroundColor: '#fff', height, borderRadius: 10 }}>
          {<Content />}
        </View>
      </Modal>
    );
  };

  const addAccount = () => {
    return (
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Text style={{ fontWeight: '500', fontSize: 17 }}>Account Name</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="alpha-numeric"
          outlineColor="#EEE5E5" // Default outline color
          activeOutlineColor="#EEE5E5" // Outline
          mode="outlined"
          value={accountName}
          placeHolder={'Enter you account name'}
          onChangeText={(text) => setAccountName(text)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            mode="outlined"
            style={[styles.button, { backgroundColor: '#fff' }]}
            labelStyle={{ color: '#A1257D', fontSize: 16 }}
            onPress={() => setShowAddAccountModal(false)}>
            Cancel
          </Button>
          <Button
            mode="contained"
            labelStyle={{ fontSize: 16 }}
            style={styles.button}
            onPress={() => setShowAddAccountModal(false)}>
            Create
          </Button>
        </View>
      </View>
    );
  };

  const allAccounts = () => {
    return (
      <>
        <TouchableOpacity
          onPress={() => setShowAccountsModal(false)}
          style={{ alignItems: 'flex-end' }}>
          <Image
            style={{ margin: 15, width: 12, height: 12 }}
            source={require('../../assets/close.png')}
          />
        </TouchableOpacity>
        <FlatList
          style={{ marginTop: 20 }}
          data={accounts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedAccount(item)}
              style={{
                height: 50,
                backgroundColor:
                  selectedAccount === item ? '#C9ADAD4D' : '#fff',
                justifyContent: 'center',
                borderWidth: 0.5,
                borderColor: '#EEE5E5',
                marginTop: 10,
                marginHorizontal: 20,
                borderRadius: 4.5,
              }}>
              <Text style={{ color: '#737373', marginLeft: 20, fontSize: 16 }}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={{ marginVertical: 10, alignItems: 'center' }}>
          <Button
            mode="contained"
            labelStyle={{ fontSize: 16 }}
            style={[styles.button, { width: '80%' }]}
            onPress={() => setShowAddAccountModal(false)}>
            Import Account
          </Button>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderModal(addAccount, showAddAccountModal, 200)}
      {renderModal(allAccounts, showAccountsModal, 400)}
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => setShowAccountsModal((prev) => !prev)}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.accountName}>Account 1</Text>

            <Image
              style={{ marginTop: 8 }}
              source={require('../../assets/downiOS.png')}
            />
          </TouchableOpacity>
          <Text style={{ ...styles.subText }}>0310Gautam.nuchain</Text>
        </View>
        <TouchableOpacity
          onPress={() => setShowAddAccountModal((prev) => !prev)}
          style={{
            backgroundColor: '#0B212D17',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
            height: 30,
            width: 30,
            marginTop: 10,
          }}>
          <Image
            style={[styles.addIcon, {}]}
            source={require('../../assets/addnew.png')}
          />
        </TouchableOpacity>
      </View>
      <Card style={styles.card}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#A1257D', '#61499D']}
          style={styles.background}
          start={{ x: 0, y: 0.5 }} // Start from left
          end={{ x: 1, y: 0.5 }}
        />

        <View style={{ marginTop: 12 }}>
          <Text
            style={{
              marginTop: 8,
              color: '#FFFFFFC7',
              marginLeft: 15,
              fontSize: 20,
              fontWeight: '600',
            }}>
            Balance
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 32,
                fontWeight: '700',
                color: '#FFFFFFC7',
              }}>
              {toggleAmt ? '$1,456,024' : '**********'}
            </Text>
            <TouchableOpacity onPress={toggleAmount}>
              <Image
                style={{
                  marginRight: 20,
                  width: 20,
                  height: 20,
                  tintColor: '#fff',
                }}
                source={require('../../assets/eyeIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.subText, { color: '#fff', marginTop: 15 }]}>
            0x00Lbcfr7sAH..............ghsfdstf
          </Text>
        </View>
      </Card>

      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginHorizontal: 10,
          marginTop: -38,
          height: '75%',
          elevation: 5, // Android
          ...Platform.select({
            ios: {
              shadowColor: '#000', // iOS
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
            },
          }),
        }}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonMainContainer}>
            <View style={styles.buttonContainer}>
              <Image
                style={styles.iconButton}
                source={require('../../assets/newUp.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', fontWeight: '400' }}>Send</Text>
          </View>
          <View style={styles.buttonMainContainer}>
            <View style={styles.buttonContainer}>
              <Image
                style={styles.iconButton}
                source={require('../../assets/down1.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', fontWeight: '400' }}>
              Receive
            </Text>
          </View>
          <View style={styles.buttonMainContainer}>
            <View style={styles.buttonContainer}>
              <Image
                style={styles.iconButton}
                source={require('../../assets/swap1.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', fontWeight: '400' }}>Swap</Text>
          </View>
          <View style={styles.buttonMainContainer}>
            <View style={styles.buttonContainer}>
              <Image
                style={styles.iconButton}
                source={require('../../assets/swap1.png')}
              />
            </View>
            <Text style={{ textAlign: 'center', fontWeight: '400' }}>
              Bridge
            </Text>
          </View>
        </View>

        <View style={styles.assetsContainer}>
          <Text
            style={{
              marginHorizontal: 30,
              fontSize: 22,
              marginTop: 7,
              color: '#737373',
            }}>
            Assets
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddNewToken')}
            style={{
              backgroundColor: '#0B212D17',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 12,
            }}>
            <Image
              style={styles.addIcon}
              source={require('../../assets/addnew.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.assetsSubContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.tokenIcon}
                source={require('../../assets/token.png')}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('AssetDetail')}
                style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 10, fontSize: 19 }}>Bitcoin</Text>
                <Text
                  style={{ fontWeight: '300', fontSize: 11, marginLeft: 1 }}>
                  bitcoin
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ marginTop: 15 }}>$54,4455.00 </Text>
              <Text style={{ color: '#3ECF8E', textAlign: 'right' }}>
                +3.47%{' '}
              </Text>
            </View>
          </View>
          <View style={styles.assetsSubContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.tokenIcon}
                source={require('../../assets/token2.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 10, fontSize: 19 }}>Dogecoin</Text>
                <Text
                  style={{ fontWeight: '300', fontSize: 11, marginLeft: 1 }}>
                  bitcoin
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 15 }}>$54,4455.00 </Text>
              <Text style={{ color: '#3ECF8E', textAlign: 'right' }}>
                +3.47%{' '}
              </Text>
            </View>
          </View>

          <View style={styles.assetsSubContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.tokenIcon}
                source={require('../../assets/token3.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 10, fontSize: 19 }}>Ethereum</Text>
                <Text
                  style={{ fontWeight: '300', fontSize: 11, marginLeft: 1 }}>
                  bitcoin
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 15 }}>$54,4455.00 </Text>
              <Text style={{ color: '#3ECF8E', textAlign: 'right' }}>
                +3.47%{' '}
              </Text>
            </View>
          </View>
          <View style={styles.assetsSubContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.tokenIcon}
                source={require('../../assets/token.png')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 10, fontSize: 19 }}>Bitcoin</Text>
                <Text
                  style={{ fontWeight: '300', fontSize: 11, marginLeft: 1 }}>
                  bitcoin
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 15 }}>$54,4455.00 </Text>
              <Text style={{ color: '#3ECF8E', textAlign: 'right' }}>
                +3.47%{' '}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text
          onPress={() => navigation.navigate('CreateDIDScreen')}
          style={styles.createDIDText}>
          {' '}
          Create DID
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FBFBFB',
  },
  card: {
    height: '27%',
    overflow: 'hidden',
    borderRadius: 30,
    margin: 10,
    marginHorizontal: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '500',
  },
  accountName: {
    marginTop: 10,
    marginHorizontal: 18,
    color: '#000',
    fontWeight: '500',
    fontSize: 25,
  },
  subText: {
    marginHorizontal: 18,
    color: '#7020C4',
    fontSize: 20,
  },
  buttonMainContainer: {
    flex: 0.22,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#A1257D0F',
    borderRadius: 40,
    alignItems: 'center',
    height: 50,
    width: 50,
    justifyContent: 'center',
  },
  iconButton: {
    height: 20,
    width: 20,
  },
  addIcon: {
    alignSelf: 'center',
    margin: 10,
    width: 15,
    height: 15,
  },
  assetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  tokenIcon: {
    marginTop: 7,
    marginRight: 10,
    height: 45,
    width: 45,
  },
  assetsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  createDIDText: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: '600',
    color: '#940569',
    marginBottom: 70,
  },
  button: {
    width: '44%',
    borderRadius: 30,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderColor: '#61499D',
    borderWidth: 1.5,
    backgroundColor: '#A1257D',
  },
});
