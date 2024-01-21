import { Logo } from "@/components/logo";
import { ModeToggle } from "./darkmode-toggle";

export const DefaultNavbar = () => {
  return (
    <div className="p-6 flex justify-between">
      <Logo />
      <ModeToggle />
    </div>
  );
};
