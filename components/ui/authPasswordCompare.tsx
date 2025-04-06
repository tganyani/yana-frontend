import { View ,Text,StyleSheet} from "react-native";
import Foundation from "@expo/vector-icons/Foundation";

export function PasswordCompare({color,text}:{color:string; text:string}) {
  return (
    <View style={styles.container}>
      <Foundation name="info" size={24} color={color} />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
container:{
flexDirection:"row",
alignItems:"center",
columnGap:8
},
infoText:{
fontSize:12,
color:"rgba(255, 255, 255, 1)"
}
})
