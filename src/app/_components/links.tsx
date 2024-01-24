import Link from "next/link";

export const Links = () => {
  return (
    <div className="space-x-10">
      <Link href="/about" className="font-normal hover:opacity-100 text-lg dark:text-muted-foreground">
        About
      </Link>
      <Link href="/check" className="font-noamrl text-lg dark:text-muted-foreground">
        Check
      </Link>
      <Link href="/something" className="font-normal text-lg dark:text-muted-foreground">
        Something
      </Link>
    </div>
  );
};
