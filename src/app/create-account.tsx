import GoogleIcon from "@/assets/expo.icon/icons/google-svg";
import LockIcon from "@/assets/expo.icon/icons/lock-svg";
import ProfileIcon from "@/assets/expo.icon/icons/profile-svg";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create an{"\n"}account</Text>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <ProfileIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <LockIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#7F7F7F"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#7F7F7F"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <LockIcon />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#7F7F7F"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#7F7F7F"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.termsText}>
          By clicking the <Text style={styles.highlightText}>Register</Text>{" "}
          button, you agree to the public offer
        </Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/welcom")}
        >
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>- OR Continue with -</Text>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={22} color="#1877F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>I Already Have an Account </Text>
          <TouchableOpacity onPress={() => router.push("/welcom")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 90,
    justifyContent: "flex-start",
    paddingBottom: Platform.OS === "ios" ? 40 : 50,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 40,
    lineHeight: 42,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000000",
  },
  termsText: {
    fontSize: 12,
    color: "#7F7F7F",
    marginBottom: 24,
    lineHeight: 18,
  },
  highlightText: {
    color: "#FF4D6D",
  },
  createButton: {
    backgroundColor: "#FF4D6D",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
    shadowColor: "#FF4D6D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  dividerText: {
    color: "#7F7F7F",
    fontSize: 13,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
  },
  socialButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#FF4D6D",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#7F7F7F",
    fontSize: 14,
  },
  loginText: {
    color: "#FF4D6D",
    fontSize: 14,
    fontWeight: "bold",
  },
});
