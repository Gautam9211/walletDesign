import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { styles } from './styles';

function AddEditContact({ navigation, route }) {
  const { type } = route.params;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [memo, setMemo] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (type === 'edit') {
      const { name, address, memo } = route.params;
      setName(name);
      setAddress(address);
      setMemo(memo);
    }
  }, []);

  return (
    <View style={styles.container}>
      {type != 'edit' ? (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            top: 15,
            marginBottom: 20,
          }}>
          Add Contact
        </Text>
      ) : !editable ? (
        <Text
          onPress={() => setEditable((prev) => !prev)}
          style={{
            marginTop: 25,
            marginBottom: 10,
            color: '#A1257D',
            textAlign: 'right',
          }}>
          Edit
        </Text>
      ) : null}
      <Text style={[styles.label, editable && { marginTop: 40 }]}>Name</Text>
      <TextInput
        style={styles.textInput}
        editable={type === 'add' ? true : editable}
        keyboardType="alpha"
        outlineColor="#EEE5E5" // Default outline color
        activeOutlineColor="#EEE5E5" // Outline
        mode="outlined"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          height: 50,
          marginVertical: 5,
          marginBottom: 10,
        }}
        editable={type === 'add' ? true : editable}
        keyboardType="alpha"
        outlineColor="#EEE5E5" // Default outline color
        activeOutlineColor="#EEE5E5" // Outline
        mode="outlined"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.label}>Memo</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          height: 50,
          marginVertical: 5,
          marginBottom: 10,
        }}
        editable={type === 'add' ? true : editable}
        keyboardType="alpha"
        outlineColor="#EEE5E5" // Default outline color
        activeOutlineColor="#EEE5E5" // Outline
        mode="outlined"
        value={memo}
        onChangeText={(text) => setMemo(text)}
      />

      {type == 'add' ? (
        <Button
          mode="contained"
          labelStyle={{ fontSize: 16 }}
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Save
        </Button>
      ) : null}

      {editable ? (
        <>
          <Button
            mode="contained"
            labelStyle={{ fontSize: 16 }}
            style={[styles.button, { width: '100%' }]}
            onPress={() => console.log('Pressed')}>
            Save
          </Button>
          <Button
            mode="outlined "
            labelStyle={{ fontSize: 16, color: '#A1257D' }}
            style={[styles.button, { width: '100%', backgroundColor: '#fff' }]}
            onPress={() => console.log('Pressed')}>
            Delete
          </Button>
        </>
      ) : null}
    </View>
  );
}

export default AddEditContact;
