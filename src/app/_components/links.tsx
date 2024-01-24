import Link from "next/link";

export const Links = () => {
  return (
    <div className="space-x-10">
      <Link href="/about" className="font-semibold hover:text-white text-xl dark:text-muted-foreground">
        About
      </Link>
      <Link href="/check" className="font-semibold text-xl dark:text-muted-foreground">
        Check
      </Link>
      <Link href="/something" className="font-semibold text-xl dark:text-muted-foreground">
        Something
      </Link>
    </div>
  );
};
