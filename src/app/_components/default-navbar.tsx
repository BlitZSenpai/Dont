import { Logo } from "@/components/logo";
import { Links } from "./links";
import { OtherStuff } from "./otherstuff";

export const DefaultNavbar = () => {
  return (
    <div className="inset-x-0 top-0 dark:bg-neutral-950/70 backdrop:blur-md fixed z-10">
      <div className="w-full flex justify-between p-6 px-16 items-center">
        <Logo />
        {/* <Links /> */}
        <OtherStuff />
      </div>
    </div>
  );
};
