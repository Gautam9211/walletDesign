import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function ManageProfile() {
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
        <Card style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{ height: 40, width: 40, margin: 5 }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                }}
              />
              <Text style={styles.text}>Create DID</Text>
            </View>

            <Image
              source={require('../../assets/nextIcon.png')}
              style={{ marginTop: 10 }}
            />
          </View>
        </Card>
        {['name', 'email'].map((item) => {
          return (
            <>
              <Text style={[styles.label, { textTransform: 'uppercase' }]}>
                {item}
              </Text>
              <Card style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.text}>
                    {item == 'name'
                      ? 'Gautam Agarwal'
                      : 'iagarwal.gautam@yahoo.com'}
                  </Text>
                  <Image
                    source={require('../../assets/nextIcon.png')}
                    style={{ marginTop: 10 }}
                  />
                </View>
              </Card>
            </>
          );
        })}

        <Text style={[styles.label, { textTransform: 'uppercase' }]}>
          Contact Info
        </Text>
        <Card style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.text}>8077048788</Text>
            <Image
              source={require('../../assets/nextIcon.png')}
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
                <Text style={styles.text}>{item} </Text>
                <Image
                  source={require('../../assets/nextIcon.png')}
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
    backgroundColor: '#fff',
  },
  label: {
    backgroundColor: '#fff',
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
  text: { padding: 10, paddingTop: 15, fontSize: 18, color: '#737373' },
});
