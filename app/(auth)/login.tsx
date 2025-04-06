import { AuthHeader } from "@/components/ui/authHeader";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EmailInput from "@/components/ui/emailInput";
import { PasswordCompare } from "@/components/ui/authPasswordCompare";
import PasswordInput from "@/components/ui/passwordInput";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { AuthButton } from "@/components/ui/authButton";
import { AuthFooter } from "@/components/ui/authFooter";
import { useState } from "react";
import ForgotPasswordModal from "@/components/ui/forgotPasswordModal";
type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const [credentialError, setcredentialError] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const values = watch();
  const allFilled = Object.values(values).every(
    (val) => val && val.trim() !== ""
  );
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setcredentialError(false);
    await axios
      .post("http://172.16.74.153:5000/user/login", data)
      .then((res) => {
        if (res.data?.logged === true) {
          router.replace({
            pathname: "/(tabs)",
            params: { id: res.data?.id },
          });
        } else {
          setcredentialError(true);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ gap: 30 }}
        >
          <AuthHeader title="Войти в аккаунт" />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field: { value, onChange } }) => (
              <EmailInput value={value} onChange={onChange} />
            )}
          />
          <View style={styles.passwordContainer}>
            <Controller
              name="password"
              control={control}
              rules={{ required: "password is required" }}
              render={({ field: { value, onChange } }) => (
                <PasswordInput
                  label="Пароль"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {credentialError && (
              <PasswordCompare
                text="неправильное имя пользователя или пароль"
                color="rgba(202, 1, 36, 1)"
              />
            )}
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity
                style={styles.forgotPasswordBtn}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <AuthButton
            title="Войти"
            color={
              !allFilled ? "rgba(123, 123, 125, 1)" : "rgba(255, 159, 247, 1)"
            }
            handlePress={handleSubmit(onSubmit)}
          />
          <AuthFooter
            text1="Нет аккаунта?"
            text2="Зарегистрироваться"
            link="/(auth)/register"
          />
          <ForgotPasswordModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  passwordContainer: {
    rowGap: 8,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordBtn: {},
  forgotPasswordText: {
    color: "rgba(195, 173, 250, 1)",
  },
});
