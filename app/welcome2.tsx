import { WelcomeComponent } from "@/components/ui/welcome";

export default function Welcome2() {
  return (
    <WelcomeComponent
      image="@/assets/images/welcome/wbg1.png"
      prevPage="/"
      nextPage="/welcome3"
      sText="Выберите из множества стилей и получите результат, который точно отражает вашу индивидуальность"
      bText="Выберите ваш стиль"
    />
  );
}
