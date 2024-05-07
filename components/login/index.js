import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.banner} source={require('./assets/phone.png')} />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.mainText}>Are you new to</Text>
          <Text style={{ ...styles.mainText, marginTop: -2, fontWeight: '700' }}>
            Blockchain Wallet?
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('pressed');
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.text}>Yes,Lets's get started</Text>
              <Image
                style={styles.icon}
                source={require('./assets/arrowBack.png')}
              />
            </View>
          </TouchableOpacity>
  
          <Text style={{ textAlign: 'center',marginTop:10 }}>Or</Text>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('pressed');
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={styles.text}>Import Existing Wallet</Text>
              <Image
                style={styles.icon}
                source={require('./assets/arrowBack.png')}
              />
            </View>
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
    banner: {
      width: '100%',
      marginVertical: 20,
      height: '50%',
    },
    mainText: {
      marginTop: 20,
      fontSize: 30,
      fontWeight: '300',
      textAlign: 'left',
      width: '100%',
      marginLeft: 80,
    },
    button: {
      borderColor: '#61499D',
      borderWidth: 1,
      borderRadius: 30,
      width: '90%',
      height: 60,
      marginTop: 12,
    },
    text: { color: '#940569', marginLeft: 20, marginTop: 10, fontSize: 18,fontWeight:'500' },
    icon: { height: 30, width: 30, marginRight: 10, marginTop: 15 },
  });
  