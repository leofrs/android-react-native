import { NavigationContainer } from "@react-navigation/native";
import { UserContextProvider } from "./src/context/User";
import Navigation from "./src/router";

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </NavigationContainer>
  );
}
