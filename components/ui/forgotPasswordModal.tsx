import {
  Modal,
  Alert,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios";
import { router } from "expo-router";

type FormData = {
  email: string;
  
};



export default function ForgotPasswordModal({
  modalVisible,
  setModalVisible,
}: any) {

   const {
      control,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm<FormData>({
      defaultValues: {
        email: "",
      },
    });
    const values = watch();
    const allFilled = Object.values(values).every(
      (val) => val && val.trim() !== ""
    );
    const handleSubmitEmail= async () => {
        // console.log("Form submitted:", data);
        await axios
          .post("http://172.16.74.153:5000/user/forgotpassword", {email:watch("email")})
          .then((res) => {
            console.log(res.data)
            if(res.data?.codeSend===true){
                router.push({pathname:"/(auth)/verifyemail",params:{email:watch("email"),reset:1}})
            }
          })
          .catch((err) => console.error(err));
      };
  return (
    <Modal
      style={{ maxHeight: 340 }}
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      presentationStyle="formSheet"
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.iconcontainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialIcons
              name="cancel"
              size={34}
              color="rgba(255, 159, 247, 1)"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Забыли пароль?</Text>
          <Text style={styles.text2}>
            Введите адрес эл. почты и мы отправим ссылку для создания нового
            пароля
          </Text>
        </View>
        <View style={styles.formContainer}>
        <Controller
        control={control}
        name="email"
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Введите адрес эл. почты"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Pressable  onPress={handleSubmitEmail} style={styles.btn}>
      <Ionicons name="send-sharp" size={24} color="white" />
        <Text style={styles.btnText}>Отправить</Text>
      </Pressable >
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#232323",
    flex: 1,
    padding: 15,
    rowGap:60
  },
  iconcontainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    rowGap:10
  },
  text1: {
    fontSize: 20,
    color: "white",
    fontWeight: 600,
    textAlign:"center"
  },
  text2: {
    fontSize: 16,
    color: "white",
    fontWeight: 400,
    textAlign:"center"
  },
  input:{
    backgroundColor:"white",
    height:37,
    borderRadius:7
  },
  formContainer:{
    rowGap:40
  },
  btn:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    columnGap:8,
    backgroundColor:"rgba(255, 159, 247, 1)",
    height:42,
    borderRadius:21
  },
  btnText:{
    color:"white",
    fontSize:16,
    fontWeight:600
  }
});
