import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardUnidades from "./Card"; // Ensure this component is correctly imported
import { dataUnidades } from "../../db/unidades"; // Ensure this data source is correctly imported

export default function UnidadesDeAtendimento() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nossas Unidades</Text>

      <FlatList
        data={dataUnidades}
        renderItem={({ item }) => <CardUnidades item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: "100%",
  },
  header: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 20,
    alignItems: "center",
  },
});
