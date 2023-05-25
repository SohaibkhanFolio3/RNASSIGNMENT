import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const FootballScreen = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED',
        headers: {
          'X-Auth-Token': '11b62c987f73438d8b1d67c12bd59631',
        },
      };
      try {
        setLoading(true);
        const response = await axios.request(options);
        setLoading(false);
        setMatches(response.data.matches);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMatches();
  }, []);

  const renderMatch = ({ item }) => {
    return (
      <View style={{padding:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('MatchDetails', { match: item })}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.competition.name}</Text>
          <Text style={styles.cardText}>
            {new Date(item.utcDate).toLocaleDateString()} at {new Date(item.utcDate).toLocaleTimeString()}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football</Text>
      {
      loading && <ActivityIndicator />
      }      
      <View style={{alignItems:'center'}}>
      <Text style={styles.heading}>Competitions</Text>
      </View>
      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  title: {
    marginTop :40,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    padding: 10,
    marginBottom: 0,
    backgroundColor: 'orange'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
  flatlistContent: {
    paddingBottom: 80,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    alignItems:'center'
  },
});

export default FootballScreen;
