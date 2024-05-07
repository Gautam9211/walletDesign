import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native';

export default function Notifications() {
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
            top: 15,
            left: 22,
            marginBottom: 20,
          }}>
          Notifications
        </Text>
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Cleveland Brown has left you a review. Both of your reviews from
              this trip are now public.
            </Text>
            <Text style={styles.dateText}>February 26, 2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text
              style={{
                ...styles.notificationText,
                color: '#717171',
                fontWeight: '300',
              }}>
              Glenn accepted your invite to co-host Cheerful 2-bedroom home in
              the heart of Quahog
            </Text>
            <Text style={styles.dateText}>April 25, 2022</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text
              style={{
                ...styles.notificationText,
                color: '#717171',
                fontWeight: '300',
              }}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text
              style={{
                ...styles.notificationText,
                color: '#717171',
                fontWeight: '300',
              }}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
        <View style={styles.subContainer}>
          <View style={{ flex: 0.9 }}>
            <Text style={styles.notificationText}>
              Meg Griffin has left you a review. Both of your reviews from this
              trip are now public.
            </Text>
            <Text style={styles.dateText}>March 1 ,2023</Text>
          </View>

          <View style={{ flex: 0.1 }}>
            <Image
              style={styles.dismissIcon}
              source={require('../../assets/close.png')}
            />
          </View>
        </View>
        <Divider />
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
    marginHorizontal: 10,
    marginTop: 5,
    minHeight: 50,
    justifyContent: 'space-between',
    padding: 6,
    flexDirection: 'row',
    flex: 1,
  },
  notificationText: { fontSize: 12, marginLeft: 10, fontWeight: '700' },
  dateText: { fontSize: 12, marginLeft: 10, marginTop: 2, color: '#717171' },
  dismissIcon: { width: 12, height: 12, margin: 10 },
});
