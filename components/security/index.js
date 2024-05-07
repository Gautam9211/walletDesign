import {
    Text,
    SafeAreaView,
    StyleSheet,
    Switch,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { useState } from 'react';
  
  // You can import supported modules from npm
  import { Card } from 'react-native-paper';
  
  export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  
    const securityMenu = [
      'Biometric',
      'Reset PIN',
      'Manage Account',
      'Recovery Phase',
      'Private Key',
    ];
  
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            top: 15,
            left: 22,
            marginBottom: 20,
          }}>
          Security
        </Text>
        <Text style={{ color: '#737373', left: 22, marginBottom: 20 }}>
          Seize the Day with Your Wallet Upgrade{' '}
        </Text>
        {securityMenu.map((item) => {
          return (
            <Card
              style={{
                height: 50,
                borderWidth: 0.5,
                borderColor: '#E2D9D9',
                marginVertical: 10,
                marginHorizontal: 20,
              }}>
              <TouchableOpacity
                disabled={item == 'Biometric' ? true : false}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#737373',
                    margin: 15,
                    fontSize: 18,
                    fontWeight: '300',
                  }}>
                  {item}
                </Text>
  
                {item == 'Biometric' ? (
                  <Switch
                    trackColor={{ false: '#EEE5E5', true: '#fff' }}
                    thumbColor={isEnabled ? '#A1257D' : '#fff'}
                    ios_backgroundColor="#EEE5E5"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{
                      marginTop: 10,
                      transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
                      borderColor: isEnabled ? '#A1257D' : '#EEE5E5',
                      borderWidth: 0.5,
                    }}
                  />
                ) : (
                  <Image
                    style={{ marginTop: 10 }}
                    source={require('./assets/nextIcon.png')}
                  />
                )}
              </TouchableOpacity>
            </Card>
          );
        })}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
  });
  