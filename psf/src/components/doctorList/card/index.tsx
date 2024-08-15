import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function CardDoctor({ item }: any) {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={{
          borderWidth: 2,
          borderColor: "red",
          width: "35%",
          borderRadius: 16,
        }}
      ></View>
      <View
        style={{
          width: "65%",
          padding: 4,
        }}
      >
        <Text style={styles.cardText}>Nome: {item.title}</Text>
        <Text style={styles.cardText2}>Especialidade: {item.espcialidade}</Text>
        <Text style={styles.cardText2}>CRM: {item.crm}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 350,
    margin: 4,
    flexDirection: "row",
    height: 144,
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
  },
  cardText2: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});
