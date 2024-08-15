import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Card, Icon } from "react-native-elements";
import NossosServicos from "../../../components/nossosServicos";
import UnidadesDeAtendimento from "../../../components/unidadesDeAtendimento";
import ClientMenu from "../../../components/menu";

export default function HomeClientScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DBD8D9" }}>
      <View style={styles.headerContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Olá, Leonardo Santos
        </Text>
        <Text style={{ fontSize: 12 }}>Como você está se sentindo hoje?</Text>
      </View>

      <Card
        containerStyle={{
          height: 180,
          backgroundColor: "#A1BBF1",
          borderRadius: 16,
        }}
      />

      <NossosServicos />
      <UnidadesDeAtendimento />
      <ClientMenu navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    padding: 8,
    marginTop: 16,
  },
});
