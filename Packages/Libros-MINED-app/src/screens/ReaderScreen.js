import { StyleSheet, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

export default function ReaderScreen({ route }) {
  const { book } = route.params || {};
  const source = {
    uri: "http://www.pdf995.com/samples/pdf.pdf", // prueba temporal
    cache: true,
  };

  return (
    <Pdf
      source={source}
      style={styles.pdf}
      onError={(error) => console.log(error)}
    />
  );
}

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
