import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";

import React, { useState } from "react";
import Checkbox from "expo-checkbox";

import { TaskList, tasksDb } from "./db/tasks";
import ModalAdd from "./components/modalAdd";

const bgImage = require("./resources/to-doList.jpg");

export default function App() {
  const [task, setTask] = useState<TaskList>(tasksDb);
  const [modalVisible, setModalVisible] = useState(false);

  async function deleteTask(id: number) {
    Alert.alert(
      "Confirmar Exclusão",
      `Você realmente deseja excluir a tarefa?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => {
            const newTasks = task.filter((task) => task.id !== id);
            setTask(newTasks);
            alert(`Tarefa foi excluída com sucesso!`);
          },
        },
      ]
    );
  }

  const handleCheckboxChange = (id: number) => {
    const updatedTasks = task.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTask(updatedTasks);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>To-do List - Leonardo Rodrigues</Text>
      </ImageBackground>

      <ScrollView style={styles.tarefaList}>
        {task.map((task) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: 70,
                borderBottomWidth: 1,
              }}
              id={task.id.toString()}
            >
              <Checkbox
                style={styles.checkbox}
                value={task.completed}
                onValueChange={() => handleCheckboxChange(task.id)}
              />
              {task.completed ? (
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: "gray",
                  }}
                >
                  {task.title}
                </Text>
              ) : (
                <Text>{task.title}</Text>
              )}

              <TouchableOpacity onPress={() => deleteTask(task.id)}>
                <Ionicons name="close-circle" size={32} color="red" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <ModalAdd
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTask={setTask}
        task={task}
      />

      <TouchableHighlight
        style={{
          alignItems: "center",
          padding: 16,
          backgroundColor: "#F2D6BB",
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "black" }}>
          Adicionar tarefa
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 100,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
    backgroundColor: "#000000c0",
  },
  tarefaList: {
    flexDirection: "column",
    height: "auto",
  },
  checkbox: {
    margin: 8,
  },
});
