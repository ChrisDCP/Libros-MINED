import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreeen"
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ReaderScreen from "../screens/ReaderScreen";
import BooksScreen from "../screens/BooksScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registro" }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
      <Stack.Screen name="Reader" component={ReaderScreen} options={{ title: "Lector PDF" }} />
      <Stack.Screen name="Books" component={BooksScreen} options={{ title: "Biblioteca" }} />
    </Stack.Navigator>
  );
}
