import { useState } from "react";
import {
  TextInput,
  Text,
  View,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";

import { tasksDb } from "../db/tasks";

export default function ModalAdd({
  modalVisible,
  setModalVisible,
  task,
  setTask,
}: any) {
  const [tarefaAtual, setTarefaAtual] = useState<string>("");

  async function addTask() {
    if (tasksDb.length > 0) {
      let id = tasksDb[tasksDb.length - 1].id + 1;
      let tarefa = { id: id, title: tarefaAtual };
      setTask([...task, tarefa]);
      setTarefaAtual("");
      setModalVisible(!modalVisible);
      alert(`Tarefa adicionada com sucesso!`);
    } else {
      let id = tasksDb[tasksDb.length - 1].id === 1;
      let tarefa = { id: id, title: tarefaAtual };
      setTask([...task, tarefa]);
      setTarefaAtual("");
      setModalVisible(!modalVisible);
      alert(`Tarefa adicionada com sucesso!`);
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontSize: 18, fontWeight: "black", marginBottom: 16 }}>
            Insira sua tarefa Abaixo
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              width: "100%",
              marginBottom: 32,
              padding: 4,
            }}
            placeholder="Insira sua tarefa aqui"
            clearTextOnFocus={true}
            autoFocus={true}
            value={tarefaAtual}
            onChangeText={(text) => setTarefaAtual(text)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 16,
            }}
          >
            <Pressable
              style={[styles.button, styles.buttonAdd]}
              onPress={() => addTask()}
            >
              <Text style={styles.textStyle}>Adicionar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: 350,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAdd: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#FF1A1C",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
