import { View, Text, StyleSheet } from 'react-native';

function List({ data }) {
  return data.map((dataPoint, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8, 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    marginVertical: 6, 
    marginHorizontal: 10, 
    backgroundColor: '#1e1e1e', 
    borderWidth: 1, 
    borderColor: '#333', 
  },
  itemText: {
    color: '#e0e0e0',
    textAlign: 'center',
    fontSize: 14, 
  },
});
