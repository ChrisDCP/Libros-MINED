import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Home</Text>
      <Button title="Ver Libros" onPress={() => navigation.navigate("Books")} />
      <Button title="Login Screen" onPress={() => navigation.navigate("Login")} />
      <Button title="Register Screen" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 20 },
});
