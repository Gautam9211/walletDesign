import { StyleSheet,Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    marginTop: 5,
    backgroundColor: '#A1257D',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
  },
  buttonLabel: { fontSize: 18, color: '#fff', },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 35,
  },
  input2: {
    width: 45,
    height: 45,
    borderWidth: 0.3,
    borderRadius: 5,
    textAlign: 'center',
    borderColor: '#9747FF',
    elevation:3,

  },
});
