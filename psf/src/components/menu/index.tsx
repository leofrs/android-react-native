import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

export default function ClientMenu() {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="house" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="user-doctor" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="calendar" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="user" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    justifyContent: "space-around", // Distribute space evenly
    alignItems: "center", // Center items vertically
    backgroundColor: "#f5f5f5", // Optional: background color for visibility
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});
