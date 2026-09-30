import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 40 : 50,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});
