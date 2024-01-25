import Link from "next/link";
import { Github } from "lucide-react";
import { ModeToggle } from "@/components/darkmode-toggle";

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
