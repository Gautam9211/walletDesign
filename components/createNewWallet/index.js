import {
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { HelperText } from 'react-native-paper';
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 80,
            fontWeight: '700',
          }}>
          Create New Wallet
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: '#737373',
            textAlign: 'center',
            marginTop: 6,
            marginBottom: 30,
          }}>
          Seize the Day with Your Wallet Upgrade
        </Text>
  
        <HelperText style={styles.helperText} type="info">
          Enter Wallet Name
        </HelperText>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder="Wallet Name"
          value={''}
        />
        <HelperText style={{...styles.helperText,marginTop:10}} type="info">
          Referral Code(Optional)
        </HelperText>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={''}
          placeholder="Referral Code"
          keyboardType="numeric"
       
        />
        <View style={{ alignItems: 'center',marginTop:30 }}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 20,
                marginTop: 14,
                fontWeight:'700'
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
    },
    input: {
      borderColor: '#EEE5E5',
      borderWidth: 1,
      height: 55,
      borderRadius: 5,
      width: '84%',
      marginHorizontal: 30,
      alignItems: 'center',
      padding:8
    },
    helperText: { marginLeft: 20, fontSize: 18, color: '#737373' },
    button: {
      backgroundColor: '#A1257D',
      height: 50,
      width: '30%',
      borderRadius: 30,
    },
  });
  