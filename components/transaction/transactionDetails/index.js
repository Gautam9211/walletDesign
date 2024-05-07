import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from 'react-native';

const data = [
  { key: 'From', value: '0x00kdgffdkdkjsmcmckmc' },
  { key: 'To', value: '0x00kdgffdkdkjsmcmckmc' },
  { key: 'Transaction Hash', value: '0x00kdgffdkdkjsmcmckmc' },
  { key: 'Transaction Fee', value: '0x00kdgffdkdkjsmcmckmc' },
];

const transactionDetails = [
  { key: 'Blockchain', value: 'Polygon' },
  { key: 'Status', value: 'Success' },
  { key: 'Timestamp', value: '9 days ago(Apr 15, 2024 at 07:00 pm)' },
  { key: 'Block Number', value: '5585287' },
  { key: 'Block Hash', value: '0x9dfb...df9811' },
  { key: 'Value', value: '1 MATIC' },
  { key: 'Method Id', value: '0x927f59ba' },
  { key: 'Gas Price', value: '106321387467' },
  { key: 'Gas Used', value: '9024522' },
  { key: 'Noune', value: '34' },
];

export default function TransactionDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Contract Call</Text>
        <Text style={{ color: '#A1257D' }}>View On Etherscan</Text>
      </View>
      <Text style={{ color: '#737373', marginTop: 7 }}>
        12 April, 2024 at 7:00 pm
      </Text>

      {data.map((item) => {
        return (
          <View style={{ marginTop: 14 }}>
            <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.key}</Text>
            <Text style={{ color: '#737373', marginTop: 7 }}>{item.value}</Text>
          </View>
        );
      })}

      <View style={{ marginTop: 14 }}>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>Received</Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
          <Image
            style={{ height: 14, width: 14 }}
            source={require('../../../assets/token.png')}
          />
          <Text style={{ color: '#3ECF8E', marginLeft: 5 }}>1 Matic</Text>
        </View>
      </View>

      <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 15 }}>
        Transaction Details
      </Text>
      {transactionDetails.map((item) => {
        return (
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{}}>{item.key}</Text>
            <Text style={{ color: '#737373', marginTop: 7 }}>{item.value}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
