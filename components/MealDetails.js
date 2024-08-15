import { View, Text, StyleSheet } from 'react-native';

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>
        {duration} min
      </Text>
      <Text style={styles.separator}>|</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={styles.separator}>|</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#e0e0e0',
    fontWeight: '500',
  },
  separator: {
    color: '#e0e0e0',
    fontSize: 14,
    marginHorizontal: 4,
  },
});

