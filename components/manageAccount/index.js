import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function App() {
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
        Manage Account
      </Text>

      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.label}>Email</Text>
        <Card style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ padding: 10, paddingTop: 15, fontSize: 16 }}>
              iagarwal.gautam@yahoo.com
            </Text>
            <Image
              source={require('./assets/nextIcon.png')}
              style={{ marginTop: 10 }}
            />
          </View>
        </Card>
        <Text style={{ ...styles.label, marginTop: 20 }}>Accounts</Text>
        {['Account 1', 'Account 2'].map((item) => {
          return (
            <Card style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{ padding: 10, paddingTop: 15, fontSize: 16 }}>
                  {item}{' '}
                </Text>
                <Image
                  source={require('./assets/nextIcon.png')}
                  style={{ marginTop: 10 }}
                />
              </View>
            </Card>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  label: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    fontSize: 16,
    marginTop: 10,
    color: '#737373',
  },
  card: {
    height: 50,
    marginVertical: 10,
    borderColor: '#E2D9D9',
  },
});
