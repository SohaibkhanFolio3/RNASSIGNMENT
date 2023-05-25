import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const SeriesScreen = ({ navigation }) => {
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSeriesData = async () => {
      const options = {
        method: 'GET',
        url: 'https://cricket-live-data.p.rapidapi.com/series',
        headers: {
          'X-RapidAPI-Key': 'c8538463d3msh54c0849635eb1cap1e99f9jsn42ffc2af7641',
          'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
        }
      };

      try {
        setLoading(true);
        const response = await axios.request(options);
        setLoading(false);
        const results = await response.data.results;
        setSeriesData(results[0].series.slice(0, 50));
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeriesData();
  }, []);

  const renderSeriesItem = ({ item }) => {
    return (
      <View>
        {/* <TouchableOpacity onPress={()=>{Alert.alert("Season Details", `id:\t\t${item.series_id}\nName: ${item.series_name}\nStatus: ${item.status}\nSeason: ${item.season}\nUpdated at: ${item.updated_at}`)}}>
          <Text style={{color: "white", padding: 20, textAlign: "center"}} >{item.series_name}</Text>
        </TouchableOpacity> */}

        <View style={{ padding: 5 }}>
          <TouchableOpacity onPress={() => { Alert.alert("Season Details", `id:\t\t${item.series_id}\nName: ${item.series_name}\nStatus: ${item.status}\nSeason: ${item.season}\nUpdated at: ${item.updated_at}`) }}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.series_name}</Text>
              <Text style={styles.cardText}>
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 50, marginTop: 50, color: 'orange' }}>Fixtures</Text>
      </View>
      {
        loading && <ActivityIndicator />
      }
      <View style={{ padding: 50, flex: 5 }}>
        <FlatList
          data={seriesData}
          renderItem={renderSeriesItem}
          keyExtractor={(item) => item.type}
        />
      </View>
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
    marginTop: 40,
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
    alignItems: 'center'
  },
});

export default SeriesScreen;
