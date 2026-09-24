import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push("/");
    }
  };

  const handleSkip = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.stepContainer}>
          <Text style={styles.darkStep}>{currentStep}</Text>
          <Text style={styles.dullStep}>/3</Text>
        </View>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/Pictures/mani.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Choose Products</Text>
        <Text style={styles.subTitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>
      <View style={styles.mainView}>
        <View />
        <View style={styles.bottomBar}>
          <View style={styles.indicatorContainer}>
            <View style={[styles.dot, currentStep === 1 && styles.activeDot]} />
            <View style={[styles.dot, currentStep === 2 && styles.activeDot]} />
            <View style={[styles.dot, currentStep === 3 && styles.activeDot]} />
          </View>

          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 20 : 10,
    paddingBottom: 25,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  darkStep: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  dullStep: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#A0A0A0",
  },
  skipText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  contentContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  mainView: {
    width: "100%",
    justifyContent: "space-between",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  activeDot: {
    width: 24,
    backgroundColor: "#17223B",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4C5E",
  },
});
