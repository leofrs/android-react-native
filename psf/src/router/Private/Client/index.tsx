import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeClientScreen from "../../../screens/client/Home";

const Stack = createNativeStackNavigator();

export default function PrivateClientRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeClientScreen} />
    </Stack.Navigator>
  );
}
