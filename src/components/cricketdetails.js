import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CricketDetails = ({ route }) => {
  const { match } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Match Details</Text>
      <View style={styles.details}>
        <Text style={styles.title}>Competition:</Text>
        <Text style={styles.value}>{match.competition.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Match Date:</Text>
        <Text style={styles.value}>{new Date(match.utcDate).toLocaleString()}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Home Team:</Text>
        <Text style={styles.value}>{match.homeTeam.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Away Team:</Text>
        <Text style={styles.value}>{match.awayTeam.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Status:</Text>
        <Text style={styles.value}>{match.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
  },
  details: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    marginRight: 10,
    color: 'orange',
  },
  value: {
    flex: 1,
    color: 'white',
  },
});

export default CricketDetails;
