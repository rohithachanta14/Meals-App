import { Text, StyleSheet } from 'react-native';

function Subtitle({ children, style }) {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 22,
    fontWeight: '700', 
    color: '#ffab00', 
    marginVertical: 12, 
    borderBottomWidth: 2, 
    borderBottomColor: '#ffab00', 
    paddingBottom: 8,
  },
});

export default Subtitle;
