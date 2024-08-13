import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "./src/context/User";
import Navigation from "./src/router";

export default function App({ navigation }: any) {
  return (
    <NavigationContainer independent={true}>
      <UserContextProvider>
        <Navigation navigation={navigation} />
      </UserContextProvider>
    </NavigationContainer>
  );
}
