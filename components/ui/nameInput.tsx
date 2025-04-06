import { View,Text ,TextInput, StyleSheet} from "react-native";


export default function NameInput({value, onChange}:any){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
            Имя и Фамилия
            </Text>
            <TextInput value={value} onChangeText={onChange} placeholder="Введите имя и фамилию"  style={styles.input}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
rowGap:8
    },
    label:{
color:"rgba(255, 255, 255, 1)",
fontSize:16
    }
    ,
    input:{
backgroundColor:"rgba(255, 255, 255, 1)",
fontSize:14,
height:44,
borderRadius:5
    }
})

