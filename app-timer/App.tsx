import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Alarm = {
  selected: boolean;
  sound: string;
  file: string;
};

type Alarms = Alarm[];

const alarms: Alarms = [
  {
    selected: true,
    sound: "alarm1",
    file: "",
  },
  {
    selected: false,
    sound: "alarm 2",
    file: "",
  },
];

export default function App() {
  const [minuts, setMinuts] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const [soundAlarm, setSoundAlarm] = useState<Alarms>(alarms);

  let numeros = [];
  for (let i = 1; i <= 60; i++) {
    numeros.push(i);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Selecione o seu tempo
      </Text>

      <View style={{ flexDirection: "row", gap: 16, marginVertical: 32 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 24,
            width: "50%",
          }}
        >
          <Text>Minutos: {minuts}</Text>
          <Picker
            selectedValue={minuts}
            onValueChange={(value) => setMinuts(value)}
            style={{ height: 50, width: 50 }}
          >
            {numeros.map((num) => {
              return (
                <Picker.Item label={num.toString()} value={num.toString()} />
              );
            })}
          </Picker>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 24,
            width: "50%",
          }}
        >
          <Text>Segundos: {seconds}</Text>
          <Picker
            selectedValue={seconds}
            onValueChange={(value) => setSeconds(value)}
            style={{ height: 50, width: 50 }}
          >
            <Picker.Item label="0" value="0" />
            {numeros.map((num) => {
              return (
                <Picker.Item label={num.toString()} value={num.toString()} />
              );
            })}
          </Picker>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 24, fontWeight: "600", textAlign: "center" }}>
          Selecione o seu alarme
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            marginVertical: 32,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 24,
              width: "33%",
              padding: 8,
            }}
          >
            <Text style={{ textAlign: "center" }}>Alarme 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 24,
              width: "33%",
              padding: 8,
            }}
          >
            <Text style={{ textAlign: "center" }}>Alarme 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 24,
              width: "33%",
              padding: 8,
            }}
          >
            <Text style={{ textAlign: "center" }}>Alarme 3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 32,
          right: 32,
          borderWidth: 1,
          borderRadius: 25,
          padding: 32,
        }}
      >
        <Text>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2547",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    width: "100%",
    height: "100%",
    borderWidth: 2,
  },
});
