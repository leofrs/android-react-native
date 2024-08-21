import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [state, setState] = useState<string>("leitura");
  const [anotacao, setAnotacao] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum consequat justo vel condimentum. Duis vitae aliquam magna. Praesent a dictum turpis, eu posuere arcu. Donec sed dictum nunc. Morbi sed eros a nulla feugiat condimentum. Aliquam vitae neque vitae risus luctus suscipit. Proin hendrerit quam sit amet quam tristique venenatis. Duis scelerisque ullamcorper faucibus. In quis vestibulum ex, non aliquam lacus. Nunc tristique vehicula turpis. Pellentesque dignissim scelerisque tellus pellentesque ultrices."
  );
  if (state === "leitura") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Anotações App</Text>
        </View>
        <View style={styles.anotacaoView}>
          <Text style={styles.anotaocaoViewText}>{anotacao}</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnAddText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else if (state === "adicionando") {
    return (
      <SafeAreaView>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "auto",
    padding: 10,
    backgroundColor: "#069",
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  anotacaoView: {
    width: "100%",
    height: "auto",
  },
  anotaocaoViewText: {
    color: "black",
    textAlign: "justify",
    fontSize: 16,
    padding: 16,
  },
  btnAdd: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#069",
    padding: 25,
    borderRadius: 25,
  },
  btnAddText: {
    position: "relative",
    textAlign: "center",
    fontSize: 24,
    top: 3,
    color: "white",
  },
});
