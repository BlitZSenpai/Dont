import { FormComponent } from "@/components/form";
import { HeroText } from "./_components/hero-text";

function Home() {
  return (
    <div className="h-dvh w-full pt-10">
      <div className="flex flex-col h-full items-center justify-">
        <HeroText />
        <FormComponent />
      </div>
    </div>
  );
}

export default Home;
