import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function TransactionsScreen({ navigation }) {
  const array = [...Array(10).keys()].map((x) => x + 1);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            color: '#737373',
            fontSize: 12,
            marginLeft: 10,
            marginTop: 10,
          }}>
          Wallet 1
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>Transactions</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Drawer');
            }}>
            <Image
              style={{ top: -10 }}
              source={require('../../../assets/filter.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator="false">
        <View style={{ marginHorizontal: 10, justifyContent: 'center' }}>
          {array.map((item) => {
            return (
              <View style={styles.assetsSubContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: -20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={styles.tokenIcon}
                    source={require('../../../assets/token.png')}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TransactionDetailScreen');
                    }}
                    style={{ flexDirection: 'column' }}>
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
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{ marginTop: 15, fontSize: 20 }}>
                    0.00002BTC
                  </Text>
                  <Text style={{ textAlign: 'right', color: '#737373' }}>
                    $1000.67{' '}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  assetsSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  tokenIcon: {
    marginTop: 7,
    marginRight: 10,
    height: 45,
    width: 45,
  },
});
