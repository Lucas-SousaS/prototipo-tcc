import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Link } from "expo-router";

import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const nome = "Maria";
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxApresentacao}>
          <Text style={styles.TitleApresentacao}>Olá, {nome}!</Text>
          <Text style={styles.subTitleApresentacao}>Que bom te ver aqui.</Text>
        </View>

        <View style={styles.cardRemedio}>
          <View>
            <FontAwesomeIcon size={38} icon="capsules" color="#1E69A0" /> 
          </View>

          <View style={styles.secBox}>
            <Text style={styles.proxRem}>Próximo Remédio</Text>
            <Text style={styles.proxRemTitle}>Losartana às 14:00</Text>
            <View style={{ position: "relative", alignSelf: "flex-start" }}>
              <Link style={{ color: "#1E69A0", fontWeight: "bold", fontSize: 14 }} href={"/(tabs)/receita"}> Veja a receita completa</Link>
              <View
                style={{
                  height: 2, 
                  backgroundColor: "#1E69A0",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxApresentacao: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  TitleApresentacao: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#595959",
  },
  subTitleApresentacao: {
    fontWeight: "semibold",
    fontSize: 20,
    color: "#595959",
  },
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
  cardRemedio: {
    backgroundColor: "#E6F0FA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 38,
    paddingVertical: 20,
  },
  proxRem: {
    color: "#8C8C8C",
    fontWeight: "medium",
    fontSize: 18,
  },
  secBox: {
    display: "flex",
    gap: 10,
  },
  proxRemTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#737373",
  },
  linkRem: {
    color: "#1E69A0",
  },
});
