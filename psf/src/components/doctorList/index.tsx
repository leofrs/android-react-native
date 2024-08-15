import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { doctorList } from "../../db/doctorList";
import CardDoctor from "./card";

export default function DoctorListItems() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nossos Médicos</Text>

      <FlatList
        data={doctorList}
        renderItem={({ item }) => <CardDoctor item={item} />}
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
