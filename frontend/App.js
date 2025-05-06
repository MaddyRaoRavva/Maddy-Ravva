import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [gold, setGold] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/best-gold-price")
      .then(res => res.json())
      .then(setGold);
  }, []);

  return (
    <View style={styles.container}>
      {gold && (
        <>
          <Text style={styles.header}>Best Gold Price: ${gold.price}</Text>
          <Text>{gold.store} - {gold.location}</Text>
          <MapView style={styles.map}
            initialRegion={{
              latitude: gold.lat,
              longitude: gold.lon,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker coordinate={{ latitude: gold.lat, longitude: gold.lon }} title={gold.store} />
          </MapView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  header: { fontSize: 24, fontWeight: 'bold' },
  map: { width: '100%', height: 300, marginTop: 20 }
});
