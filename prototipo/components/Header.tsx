import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FontAwesomeIcon size={28} icon="bars" />
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#F9FAFB",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
