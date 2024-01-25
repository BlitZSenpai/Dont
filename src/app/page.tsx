import { FormComponent } from "@/components/form";
import { HeroText } from "./_components/hero-text";

function Home() {
  return (
    <div className="h-dvh w-full pt-12">
      <div className="flex flex-col w-full h-full items-center gap-4">
        <HeroText />
        <FormComponent />
      </div>
    </div>
  );
}

export default Home;
