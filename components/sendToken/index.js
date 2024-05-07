import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  // You can import supported modules from npm
  import { Card } from 'react-native-paper';
  
  export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ marginTop: 10, fontSize: 25, fontWeight: '600' }}>
                0.033 BTC
              </Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 15,
                  marginLeft: 1,
                  color: '#737373',
                }}>
                $10,000.73
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={styles.polygonIcon}
              source={require('./assets/polygon.png')}
            />
            <Text
              style={{
                textAlign: 'right',
                color: '#737373',
                fontSize: 16,
                marginRight: 10,
              }}>
              +3.47%{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity style={styles.button}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={styles.buttonIcon}
                source={require('./assets/arrowDown1.png')}
              />
              <Text style={styles.buttonText}>Send</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={styles.buttonIcon}
                source={require('./assets/arrowdown2.png')}
              />
              <Text style={styles.buttonText}>Receive</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            margin: 20,
            marginBottom: 0,
            fontSize: 22,
            color: '#737373',
          }}>
          Transactions{' '}
        </Text>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 11,
                  marginLeft: 1,
                  marginTop: 10,
                }}>
                Yesterday at 12:23pm
              </Text>
              <Text style={{ fontSize: 19 }}>Received</Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  marginLeft: 1,
                  marginTop: 5,
                  color: '#3ECF8E',
                }}>
                Successful
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 15, fontSize: 20 }}>0.00002BTC</Text>
            <Text style={{ textAlign: 'right', color: '#737373' }}>
              $1000.67{' '}
            </Text>
          </View>
        </View>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <Image
              style={{
                ...styles.tokenIcon,
                position: 'absolute',
                left: 15,
                top: 17,
                width: 50,
                height: 50,
              }}
              source={require('./assets/ethIcon.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 11,
                  marginLeft: 1,
                  marginTop: 10,
                }}>
                2 days ago at 06:23pm
              </Text>
              <Text style={{ fontSize: 19 }}>Swap BTC - ETH</Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  marginLeft: 1,
                  marginTop: 5,
                  color: '#CF3E3E',
                }}>
                Failed
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 15, fontSize: 20 }}>0.00002BTC</Text>
            <Text style={{ textAlign: 'right', color: '#737373' }}>
              $1000.67{' '}
            </Text>
          </View>
        </View>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 11,
                  marginLeft: 1,
                  marginTop: 10,
                }}>
                Yesterday at 12:23pm
              </Text>
              <Text style={{ fontSize: 19 }}>Received</Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  marginLeft: 1,
                  marginTop: 5,
                  color: '#3ECF8E',
                }}>
                Successful
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 15, fontSize: 20 }}>0.00002BTC</Text>
            <Text style={{ textAlign: 'right', color: '#737373' }}>
              $1000.67{' '}
            </Text>
          </View>
        </View>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 11,
                  marginLeft: 1,
                  marginTop: 10,
                }}>
                2 days ago at 06:23pm
              </Text>
              <Text style={{ fontSize: 19 }}>Swap BTC - ETH</Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  marginLeft: 1,
                  marginTop: 5,
                  color: '#3ECF8E',
                }}>
                Successful
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 15, fontSize: 20 }}>0.00002BTC</Text>
            <Text style={{ textAlign: 'right', color: '#737373' }}>
              $1000.67{' '}
            </Text>
          </View>
        </View>
        <View style={styles.assetsSubContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.tokenIcon}
              source={require('./assets/Bitcoin.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 11,
                  marginLeft: 1,
                  marginTop: 10,
                }}>
                Yesterday at 12:23pm
              </Text>
              <Text style={{ fontSize: 19 }}>Received</Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  marginLeft: 1,
                  marginTop: 5,
                  color: '#3ECF8E',
                }}>
                Successful
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ marginTop: 15, fontSize: 20 }}>0.00002BTC</Text>
            <Text style={{ textAlign: 'right', color: '#737373' }}>
              $1000.67{' '}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    assetsSubContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    tokenIcon: {
      marginTop: 7,
      marginRight: 10,
      height: 65,
      width: 65,
    },
    polygonIcon: {
      height: 8,
      width: 8,
      marginRight: 2,
      marginTop: 2,
    },
    button: {
      flex: 0.45,
      backgroundColor: '#A1257D0F',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'right',
      color: '#A1257D',
      fontSize: 18,
      fontWeight: '600',
    },
    buttonIcon: {
      height: 18,
      width: 18,
      marginRight: 12,
    },
  });
  