import { WelcomeComponent } from "@/components/ui/welcome";

export default function Welcome1() {
  return (
    <WelcomeComponent
      image="@/assets/images/welcome/wbg1.png"
      prevPage=""
      nextPage="/welcome2"
      sText=" Создайте уникальный дизайн, который выделит ваш бренд среди остальных "
      bText="Добро пожаловать в CREATIFY"
    />
  );
}
