import { FlatList, StyleSheet, Text, View } from "react-native";

import { agendaMedica } from "../../db/agendaMedica";
import CardMedico from "./Card";

export default function AgendaMedica() {
  return (
    <View style={{ flex: 1, backgroundColor: "#DBD8D9" }}>
      <Text
        style={{
          borderWidth: 1,
          borderColor: "red",
          width: "100%",
          textAlign: "center",
        }}
      >
        Onde nossos médicos realizam consultas
      </Text>
      <FlatList
        data={agendaMedica}
        renderItem={({ item }) => <CardMedico item={item} />}
        // keyExtractor={(item) => item.id}
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
