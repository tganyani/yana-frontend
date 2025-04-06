import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { router, useLocalSearchParams  } from "expo-router";
import { PasswordCompare } from "@/components/ui/authPasswordCompare";
import { Ionicons } from "@expo/vector-icons";


type FormData = {
  password: string;
  confirmPassword: string;
};

export default function ResetPassword() {
  const [secure, setSecure] = useState(true);
  const { email } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });
  const values = watch();
  const allFilled = Object.values(values).every(
    (val) => val && val.trim() !== ""
  );
  const passwodMatched = watch("password") === watch("confirmPassword");
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Form submitted:", data);
    await axios
      .post("http://172.16.74.153:5000/user/resetpassword", {email,password:watch("password")})
      .then((res) => {
        if(res.data?.successRest===true){
            router.push({pathname:"/(auth)/login",params:{email}})
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ gap: 60, padding: 8 }}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Сбросить пароль</Text>
          </View>
          <View style={styles.inputMain}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Новый пароль</Text>
              <View
                style={[
                  styles.inputInner,
                  {
                    borderColor: passwodMatched
                      ? "white"
                      : "rgba(202, 1, 36, 1)",
                  },
                ]}
              >
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: "password is required" }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input]}
                      secureTextEntry={secure}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                  <Ionicons
                    name={secure ? "eye-off-outline" : "eye-outline"}
                    size={34}
                    color="rgba(123, 123, 125, 1)"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Подтвердите новый пароль</Text>
              <View
                style={[
                  styles.inputInner,
                  {
                    borderColor: passwodMatched
                      ? "white"
                      : "rgba(202, 1, 36, 1)",
                  },
                ]}
              >
                <Controller
                  control={control}
                  name="confirmPassword"
                  rules={{ required: "confirm password is required" }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={[styles.input]}
                      secureTextEntry={secure}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                />
                <TouchableOpacity onPress={() => setSecure(!secure)}>
                  <Ionicons
                    name={secure ? "eye-off-outline" : "eye-outline"}
                    size={34}
                    color="rgba(123, 123, 125, 1)"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <PasswordCompare
              text="Пароли не совпадают"
              color={
                passwodMatched ? "rgba(0, 221, 0, 1)" : "rgba(202, 1, 36, 1)"
              }
            />
          </View>
          <Pressable
          onPress={handleSubmit(onSubmit)}
            style={[
              styles.btn,
              {
                backgroundColor:
                  allFilled && passwodMatched
                    ? "rgba(255, 159, 247, 1)"
                    : "rgba(123, 123, 125, 1)",
              },
            ]}
          >
            <Text style={styles.btnText}>Подтвердить</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8 },
  header: { alignItems: "center" },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },
  inputContainer: {
    rowGap: 8,
  },
  input: {
    color: "white",
    flex: 1,
    fontSize: 18,
    paddingLeft: 8,
  },
  inputMain: {
    rowGap: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: "white",
  },
  btn: {
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 600,
    color: "white",
  },
  inputInner: {
    flexDirection: "row",
    flexWrap: "nowrap",
    borderWidth: 1,
    height: 42,
    borderRadius: 6,
    alignItems: "center",
    paddingRight: 8,
  },
});
