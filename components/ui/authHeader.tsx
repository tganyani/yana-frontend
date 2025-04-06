import { View, Image, Text, StyleSheet } from "react-native";

export function AuthHeader({title}:{title:string}) {
  return (
    <View style={styles.container}>
      <Image
      style={{height:73,width:50}}
        source={require("@/assets/images/auth/auth-header-bg.png")}
        alt="auth-header-image"
      />
      <Text style={styles.HeaderText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
justifyContent:"center",
alignItems:"center",
rowGap:15
    },
    HeaderText:{
fontSize:18,
color:"white"
    }
})