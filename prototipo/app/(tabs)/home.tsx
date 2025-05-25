import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>tela inicial</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});
