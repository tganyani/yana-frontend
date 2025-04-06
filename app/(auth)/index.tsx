import { ChooseProfileType } from "@/components/ui/authChooseAccount";

export default function ProfileType() {
  return (
    <ChooseProfileType
      mainText="Кем Вы являетесь? Выберите ниже"
      btnText1="Дизайнер"
      btnText2="Заказчик"
      link1="/(auth)/loginmethod"
      link2="/(auth)/loginmethod"
    />
   
  );
}


