import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Icon } from "react-native-elements";

export default function LoginComponent({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        marginTop: 16,
      }}
    >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Número do cartão do SUS"
            placeholderTextColor={"gray"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ width: 250, backgroundColor: "#EBEBEA", padding: 12 }}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Nome"
            placeholderTextColor={"gray"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ width: 250, backgroundColor: "#EBEBEA", padding: 12 }}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Senha"
            placeholderTextColor={"gray"}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{ width: 250, backgroundColor: "#EBEBEA", padding: 12 }}
          />
        )}
        name="lastName"
      />
      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        color={"#3378FE"}
      />
      <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={{ color: "gray" }}>Não tem uma conta? Cadastre-se</Text>
      </Pressable>

      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ color: "black", marginTop: 32 }}>
          -------------- Nossas Redes --------------
        </Text>
        <View style={styles.imageContainer}>
          <Icon name="whatsapp" type="font-awesome" size={48} color="green" />
          <Icon
            name="instagram"
            type="font-awesome"
            size={48}
            color="magenta"
          />
          <Icon name="facebook" type="font-awesome" size={48} color="blue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    gap: 32,
    marginTop: 32,
  },
});
