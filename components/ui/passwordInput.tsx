import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PasswordInput({ label,value, onChange }: any) {
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Введите пароль"
          secureTextEntry={secure}
          style={styles.input}
          value={value}
          onChangeText={onChange}
        />
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.icon}
        >
          <Ionicons name={secure ? "eye-off-outline" : "eye-outline"} size={24} color="rgba(123, 123, 125, 1)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  label: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
  },
  input: {
    fontSize: 14,
    height: 44,
    flex:1,
  },
  inputContainer: {
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingRight:15
  },
  icon: {

  },
});
