import Link from "next/link";

export const Links = () => {
  return (
    <div className="sm:space-x-6 md:space-x-10 hidden sm:block">
      <Link
        href="/about"
        className="dark:hover:text-neutral-50 text-lg dark:text-muted-foreground transition-colors">
        About
      </Link>
      <Link
        href="/check"
        className="dark:hover:text-neutral-50 text-lg dark:text-muted-foreground transition-colors">
        Check
      </Link>
      <Link
        href="/something"
        className="dark:hover:text-neutral-50 text-lg dark:text-muted-foreground transition-colors">
        Something
      </Link>
    </div>
  );
};
