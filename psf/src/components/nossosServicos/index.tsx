import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

import { dataServices } from "../../db/servicos";

export default function NossosServicos() {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 8, fontWeight: "bold", fontSize: 16 }}>
        Nossos Serviços
      </Text>

      <FlatList
        horizontal={true}
        data={dataServices}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        // Optional: Add a little padding between items
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: 190,
    marginTop: 8,
  },
});
