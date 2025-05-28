import Header from "@/components/Header";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from 'react-native-svg';

export default function Map() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>
          Mapa
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  box: {
    display: "flex",
    width: "80%",
    marginTop: 38,
  },
});
