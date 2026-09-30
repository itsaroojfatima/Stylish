import { useRouter } from "expo-router";
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/shopping.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>
              You want{"\n"}Authentic, here{"\n"}you go!
            </Text>
            <Text style={styles.subtitle}>Find it here, buy it now!</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "flex-end",
    paddingBottom: Platform.OS === "ios" ? 40 : 50,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 14,
    lineHeight: 46,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#E0E0E0",
    textAlign: "center",
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#FF4D6D",
    height: 54,
    width: "70%",
    alignSelf: "center",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FF4D6D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
