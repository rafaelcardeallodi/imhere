import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  form: {
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 12
  },
  listEmptyText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center'
  }
});