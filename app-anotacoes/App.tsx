import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [state, setState] = useState<string>("leitura");
  const [anotacao, setAnotacao] = useState<string>("");

  useEffect(() => {
    (async () => {
      const anotacaoLeitura = await AsyncStorage.getItem("anotacao");
      if (anotacaoLeitura !== null) setAnotacao(anotacaoLeitura);
    })();
  }, []);

  const setData = async () => {
    try {
      await AsyncStorage.setItem("anotacao", anotacao);
    } catch (error) {
      alert(`Error encontrado: ${error}`);
    }
  };

  function handleState() {
    setState("leitura");
    setData();
  }

  if (state === "leitura") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={styles.headerText}>Anotação App</Text>
        </View>
        {anotacao !== "" ? (
          <View style={styles.anotacaoView}>
            <Text style={styles.anotaocaoViewText}>{anotacao}</Text>
          </View>
        ) : (
          <View style={styles.anotacaoView}>
            <Text
              style={{
                color: "gray",
                textAlign: "justify",
                fontSize: 16,
                padding: 16,
                borderWidth: 1,
                margin: 12,
                borderRadius: 25,
              }}
            >
              Sem anotação 😞
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => setState("adicionando")}
        >
          {anotacao === "" ? (
            <Text style={styles.btnAddText}>Adicionar</Text>
          ) : (
            <Text style={styles.btnAddText}>Editar</Text>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else if (state === "adicionando") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar hidden />
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
            Anotação App
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
            numberOfLines={30}
            value={anotacao}
            onChangeText={(newText) => setAnotacao(newText)}
            style={{
              textAlignVertical: "top",
              borderWidth: 1,
              borderRadius: 25,
              padding: 14,
            }}
            placeholder="Insira aqui o seu texto"
            autoFocus={true}
          />
        </View>
        <TouchableOpacity
          style={styles.btnSalvar}
          onPress={() => handleState()}
        >
          {anotacao !== "" ? (
            <Text style={styles.btnSalvarText}>Salvar</Text>
          ) : (
            <Text style={styles.btnSalvarText}>Editar</Text>
          )}
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
    padding: 16,
    borderRadius: 8,
  },
  btnAddText: {
    position: "relative",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  btnSalvar: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#069",
    padding: 16,
    borderRadius: 8,
  },
  btnSalvarText: {
    position: "relative",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
