import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginComponent from "../../components/login";

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3378FE" }}>
      <View style={styles.titleView}></View>

      <View style={styles.loginView}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/areiaLogo.jpeg")} // Substitua pelo URL da sua imagem
            style={styles.image}
          />
        </View>
        <LoginComponent navigation={navigation} />
      </View>
      <Text style={{ position: "absolute", bottom: 16, left: 144 }}>
        © Leonardo Santos
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleView: {
    width: "100%",
    height: "15%",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 64,
    position: "absolute",
    top: -32,
    left: 150,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 64,
  },
  loginView: {
    width: "100%",
    height: "85%",
    backgroundColor: "#E3DFDE",
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    position: "relative",
  },
});
