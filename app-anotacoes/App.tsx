import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [state, setState] = useState<string>("leitura");
  const [anotacao, setAnotacao] = useState<string>();
  if (state === "leitura") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Anotações App</Text>
        </View>
        <View style={styles.anotacaoView}>
          <Text style={styles.anotaocaoViewText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vestibulum consequat justo vel condimentum. Duis vitae aliquam
            magna. Praesent a dictum turpis, eu posuere arcu. Donec sed dictum
            nunc. Morbi sed eros a nulla feugiat condimentum. Aliquam vitae
            neque vitae risus luctus suscipit. Proin hendrerit quam sit amet
            quam tristique venenatis. Duis scelerisque ullamcorper faucibus. In
            quis vestibulum ex, non aliquam lacus. Nunc tristique vehicula
            turpis. Pellentesque dignissim scelerisque tellus pellentesque
            ultrices."
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => setState("adicionando")}
        >
          <Text style={styles.btnAddText}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else if (state === "adicionando") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar style="dark" />
        <View
          style={{
            width: "100%",
            backgroundColor: "#069",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Text
            style={{
              width: "50%",
              fontSize: 18,
              color: "white",
              textAlign: "left",
              paddingHorizontal: 8,
            }}
          >
            Anotações App
          </Text>
          <Text
            style={{
              width: "50%",
              fontSize: 18,
              color: "white",
              textAlign: "right",
              paddingHorizontal: 8,
            }}
            onPress={() => setState("leitura")}
          >
            Voltar
          </Text>
        </View>
        <View style={{ marginVertical: 4, padding: 14 }}>
          <TextInput
            multiline={true}
            numberOfLines={5}
            value={anotacao}
            onChangeText={(newText) => setAnotacao(newText)}
            style={{
              textAlignVertical: "top",
              borderWidth: 1,
              borderRadius: 25,
              padding: 14,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.btnSalvar}
          onPress={() => setState("adicionando")}
        >
          <Text style={styles.btnSalvarText}>Salvar</Text>
        </TouchableOpacity>
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
    textAlign: "center",
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
    borderWidth: 1,
    margin: 12,
    borderRadius: 25,
  },
  btnAdd: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#069",
    padding: 25,
    borderRadius: 50,
  },
  btnAddText: {
    position: "relative",
    textAlign: "center",
    fontSize: 24,
    color: "white",
  },
  btnSalvar: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#069",
    padding: 16,
    borderRadius: 50,
  },
  btnSalvarText: {
    position: "relative",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
