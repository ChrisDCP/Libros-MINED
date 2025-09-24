import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/FirebaseConfig";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "432024090744-oms52ke7pdecmjgelth1rlabl0v2sen1.apps.googleusercontent.com",
    iosClientId: "432024090744-oms52ke7pdecmjgelth1rlabl0v2sen1.apps.googleusercontent.com",
    androidClientId: "432024090744-oms52ke7pdecmjgelth1rlabl0v2sen1.apps.googleusercontent.com",
    webClientId: "432024090744-oms52ke7pdecmjgelth1rlabl0v2sen1.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Google Token:", authentication.accessToken);
      navigation.replace("Home");
    }
  }, [response]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigation.replace("Home");
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Crear cuenta" onPress={() => navigation.navigate("Register")} />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Iniciar con Google"
          disabled={!request}
          onPress={() => promptAsync()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
});
