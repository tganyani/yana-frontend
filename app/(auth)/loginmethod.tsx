import { ChooseProfileType } from "@/components/ui/authChooseAccount";

export default function LoginType() {
  return (
    <ChooseProfileType
      mainText="Качественно. Быстро. Стильно."
      btnText1="Войти"
      btnText2="Зарегистрироваться"
      link1="/(auth)/login"
      link2="/(auth)/register"
    />
   
  );
}