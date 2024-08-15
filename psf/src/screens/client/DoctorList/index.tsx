import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ClientMenu from "../../../components/menu";
import DoctorListItems from "../../../components/doctorList";

export default function DoctorList({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DBD8D9" }}>
      <DoctorListItems />
      <ClientMenu navigation={navigation} />
    </SafeAreaView>
  );
}
