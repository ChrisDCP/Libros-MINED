import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function ReaderScreen({ route, navigation }) {
  const { book } = route.params || {};

  useEffect(() => {
    if (book?.url) {
      WebBrowser.openBrowserAsync(book.url).then(() => {
        // Opcional: volver automáticamente a la lista después de cerrar el navegador
        navigation.goBack();
      });
    }
  }, []);

  return null; // No muestra nada en la pantalla
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
