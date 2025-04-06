import { View, Text, TextInput, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function EmailInput({value, onChange}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Почта</Text>
      <View style={styles.inputContainer}>
        {value === "" && (
          <AntDesign name="mail" size={32} color="rgba(123, 123, 125, 1)" />
        )}
        <TextInput
          placeholder="Введите эл. почту"
          style={styles.input}
          value={value}
          onChangeText={onChange}
          inputMode="email"
        />
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
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 5,
  },
});
