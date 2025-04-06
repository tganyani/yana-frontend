import { Pressable, StyleSheet, Text } from "react-native";

export function AuthButton({title,color,handlePress}:any) {
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.btn, { backgroundColor: color }]}
    >
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:25
  },
  btnText: {
    color: "white",
  },
});
