import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeClientScreen from "../../../screens/client/Home";
import UserProfile from "../../../screens/client/userProfile";
import Calendar from "../../../screens/client/Calendar";
import DoctorList from "../../../screens/client/DoctorList";

const Stack = createNativeStackNavigator();

export default function PrivateClientRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeClient" component={HomeClientScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="DoctorList" component={DoctorList} />
    </Stack.Navigator>
  );
}
