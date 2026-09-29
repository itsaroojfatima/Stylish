import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    router.push("/welcom");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot{"\n"}password?</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#7F7F7F"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#7F7F7F"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <Text style={styles.helperText}>
          <Text style={styles.asterisk}>* </Text>
          We will send you a message to set or{"\n"}reset your new password
        </Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    paddingTop: 70,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 35,
    lineHeight: 42,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000000",
  },
  helperText: {
    fontSize: 12,
    color: "#7F7F7F",
    marginBottom: 30,
    lineHeight: 18,
  },
  asterisk: {
    color: "#FF4D6D",
  },
  submitButton: {
    backgroundColor: "#FF4D6D",
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FF4D6D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
