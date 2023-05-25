import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Football')}
      >
        <Text style={styles.buttonText}>Football</Text>
        <Text style={styles.buttonDescription}>The beautiful game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Series')}
      >
        <Text style={styles.buttonText}>Cricket</Text>
        <Text style={styles.buttonDescription}>The gentleman's game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonDescription: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
