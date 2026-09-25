import { useRouter } from "expo-router";
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

export default function Onboarding2() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/onboarding3");
  };

  const handlePrev = () => {
    router.back();
  };

  const handleSkip = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.stepContainer}>
          <Text style={styles.darkStep}>2</Text>
          <Text style={styles.dullStep}>/3</Text>
        </View>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/Alika.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Make Payment</Text>
        <Text style={styles.subTitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.bottomBar}>
          <View style={styles.sideButtonContainer}>
            <TouchableOpacity onPress={handlePrev}>
              <Text style={styles.prevButtonText}>Prev</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.indicatorContainer}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
          <TouchableOpacity
            onPress={handleNext}
            style={styles.nextButtonContainer}
          >
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
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  sideButtonContainer: {
    width: 60,
  },
  prevButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A0A0A0",
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
  nextButtonContainer: {
    width: 60,
    alignItems: "flex-end",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4C5E",
  },
});
