import React, { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const mockBooks = [
  { id: "1", title: "Matemáticas 7°", author: "MINED", subject: "Matemáticas" },
  { id: "2", title: "Lengua y Literatura 8°", author: "MINED", subject: "Lengua" },
  { id: "3", title: "Historia de Nicaragua 9°", author: "MINED", subject: "Historia" },
];

export default function BooksScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredBooks = mockBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Libros Disponibles</Text>
      <TextInput
        style={styles.search}
        placeholder="Buscar por título, autor o asignatura"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate("Reader", { book: item })}
          >
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookDetails}>{item.author} - {item.subject}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  bookItem: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  bookTitle: { fontSize: 18, fontWeight: "bold" },
  bookDetails: { fontSize: 14, color: "#555" },
});
