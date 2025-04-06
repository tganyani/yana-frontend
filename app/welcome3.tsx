import { WelcomeComponent } from "@/components/ui/welcome";

export default function Welcome3() {
  return (
    <WelcomeComponent
      image="@/assets/images/welcome/wbg1.png"
      prevPage="/welcome2"
      nextPage="/(auth)"
      sText="Твой бренд, твой стиль — создавай впечатление с нами"
      bText="Твой бренд в руках экспертов"
    />
  );
}
