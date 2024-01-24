import Link from "next/link";
import { ModeToggle } from "./darkmode-toggle";
import { Github } from "lucide-react";

export const OtherStuff = () => {
  return (
    <div className="flex items-center gap-4">
      <ModeToggle />
      <div className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
        <Link target="_blank" href="https://github.com/BlitZSenpai">
          <Github className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
