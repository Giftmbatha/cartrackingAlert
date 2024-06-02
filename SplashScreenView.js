import { Text, View, Image, StyleSheet } from "react-native";
import Icon from "./assets/images/icon.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={Icon} style={styles.image} />
        <Text style={styles.text}>Track Every Move, Secure Every Ride.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0e1824",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  text: {
    color: "#1eca6c",
    marginTop: 20,
    fontWeight:"bold"
  },
});
