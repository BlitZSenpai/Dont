import Link from "next/link";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/darkmode-toggle";
import { buttonVariants } from "@/components/ui/button";

export const OtherStuff = () => {
  return (
    <div className="flex items-center gap-2">
      <ModeToggle />
      <div
        className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-md h-20 w-20" })}>
        <Link target="_blank" href="https://github.com/BlitZSenpai">
          <Github className="h-full w-full" />
        </Link>
      </div>
    </div>
  );
};
