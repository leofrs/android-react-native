import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function CardMedico({ item }: any) {
  return (
    <TouchableOpacity style={styles.card}>
      <View
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Text style={styles.cardText}>Nome: {item.title}</Text>
        <Text style={styles.cardText}>Especialidade: {item.especialidade}</Text>
        <Text style={styles.cardText}>Dias da Semana: {item.dias}</Text>
        <Text style={styles.cardText}>PSF: {item.psf}</Text>
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
    height: "auto",
  },
  cardText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  cardText2: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});
