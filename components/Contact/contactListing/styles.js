import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 30 },
  button: {
    width: '100%',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderColor: '#61499D',
    borderWidth: 1.5,
    backgroundColor: '#A1257D',
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: 1,
  },
});
