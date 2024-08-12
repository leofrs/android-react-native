import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeAdminScreen from "../../../screens/admin/Home";

const Stack = createNativeStackNavigator();

export default function PrivateAdminRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeAdminScreen} />
    </Stack.Navigator>
  );
}
