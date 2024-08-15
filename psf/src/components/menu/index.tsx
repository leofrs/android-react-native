import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

export default function ClientMenu({ navigation }: any) {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("HomeClient")}
      >
        <Icon name="house" size={28} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("DoctorList")}
      >
        <Icon name="user-doctor" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Calendar")}
      >
        <Icon name="calendar" size={26} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("UserProfile")}
      >
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
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "black",
  },
  menuItem: {
    padding: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});
