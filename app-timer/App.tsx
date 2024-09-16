import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text>Minutos: </Text>
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
        <View>
          <Text>Segundos: </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2547",
    alignItems: "center",
    justifyContent: "center",
  },
});
