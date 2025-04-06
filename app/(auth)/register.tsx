import { AuthButton } from "@/components/ui/authButton";
import { AuthFooter } from "@/components/ui/authFooter";
import { AuthHeader } from "@/components/ui/authHeader";
import { PasswordCompare } from "@/components/ui/authPasswordCompare";
import EmailInput from "@/components/ui/emailInput";
import NameInput from "@/components/ui/nameInput";
import PasswordInput from "@/components/ui/passwordInput";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { router } from "expo-router";

type FormData = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

export default function Register() {
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
  const passwodMatched = watch("password") === watch("confirmPassword");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Form submitted:", data);
    await axios
      .post("http://172.16.74.153:5000/user", data)
      .then((res) => {
        if(res.data?.created===true){
            router.push({pathname:"/(auth)/verifyemail",params:{email:res.data?.email,reset:0}})
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
          <AuthHeader title="Создать аккаунт" />
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field: { value, onChange } }) => (
              <NameInput value={value} onChange={onChange} />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field: { value, onChange } }) => (
              <EmailInput value={value} onChange={onChange} />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field: { value, onChange } }) => (
              <PasswordInput label="Пароль" value={value} onChange={onChange} />
            )}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}
          <View style={styles.passwordConfirm}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: "confirm password is required" }}
              render={({ field: { value, onChange } }) => (
                <PasswordInput
                  label="Подтвердите пароль"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <PasswordCompare
            text="Пароли не совпадают"
              color={
                passwodMatched ? "rgba(0, 221, 0, 1)" : "rgba(202, 1, 36, 1)"
              }
            />
          </View>
          <AuthButton
            title="Зарегистрироваться"
            color={
              !allFilled || !passwodMatched
                ? "rgba(123, 123, 125, 1)"
                : "rgba(255, 159, 247, 1)"
            }
            handlePress={handleSubmit(onSubmit)}
          />
          <AuthFooter text1="Уже есть аккаунт?" text2="Войти" link="/(auth)/login"/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  passwordConfirm: {
    rowGap: 8,
  },
});
