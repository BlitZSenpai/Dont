import { Logo } from "@/components/logo";
import { ModeToggle } from "./darkmode-toggle";
import { Links } from "./links";

export const DefaultNavbar = () => {
  return (
    <div className="inset-x-0 top-0 bg-neutral-950/70 backdrop:blur-md opacity-70 fixed">
      <div className="w-full flex justify-between p-6 px-10">
        <Logo />
        <Links />
        <ModeToggle />
      </div>
    </div>
  );
};
