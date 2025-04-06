import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function AuthFooter({text1,text2,link}:any) {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <Text style={styles.qText}>{text1}</Text>
      <TouchableOpacity onPress={()=>router.push(link)}>
        <Text style={styles.btnText}>{text2} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection:"row",columnGap:15,justifyContent:"center"},
  qText: {fontSize:14,color:"white"},
  btnText: {fontSize:14,color:"rgba(164, 164, 164, 1)"},
});
