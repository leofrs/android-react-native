import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ClientMenu from "../../../components/menu";
import AgendaMedica from "../../../components/agendaMédica";

export default function Calendar({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DBD8D9" }}>
      <AgendaMedica />
      <ClientMenu navigation={navigation} />
    </SafeAreaView>
  );
}
