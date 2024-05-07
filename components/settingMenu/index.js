import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function SettingTab({ navigation }) {
  const Divider = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#DEDEDE',
          width: '90%',
          marginHorizontal: 20,
        }}></View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            left: 22,
            marginTop: 10,
          }}>
          Settings
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ManageProfile')}
          style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/profilesetting.png')}
              />
            </View>

            <Text style={{ fontSize: 20, marginLeft: 10 }}>Manage Account</Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </TouchableOpacity>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/group.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Engage With Our Coummunity
            </Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contacts');
          }}
          style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/idIcon.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Contacts</Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </TouchableOpacity>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/currency.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Currency Preferences
            </Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/lock.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Security</Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/notification.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Push Notification
            </Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/groupdiscussion.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Join Our Community
            </Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/info.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Terms & Conditions
            </Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </View>
        <Divider />
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'WelcomeScreen' }],
            })
          }
          style={styles.subContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.shadowContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/info.png')}
              />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 10 }}>Logout</Text>
          </View>
          <Image
            style={{ width: 24, height: 24, marginTop: 7 }}
            source={require('../../assets/nextIcon.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  subContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    justifyContent: 'space-between',
    padding: 6,
    flexDirection: 'row',
  },
  shadowContainer: {
    backgroundColor: 'transparent',
    shadowColor: '#000000', // Shadow color with alpha
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5, // For Android
    marginHorizontal: 0,
    marginVertical: 0,
  },
  icon: {
    width: 35,
    height: 35,
  },
});
