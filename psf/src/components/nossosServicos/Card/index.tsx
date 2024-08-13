import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function CardServicos({ item }: any) {
  return (
    <TouchableOpacity style={styles.card}>
      <Icon
        name={item.icon}
        type="font-awesome"
        size={48}
        color="white"
        style={{ paddingTop: 16 }}
      />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 120,
    margin: 4,
    backgroundColor: "#3279FE",
    gap: 16,
  },
  cardText: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    paddingBottom: 16,
  },
});
