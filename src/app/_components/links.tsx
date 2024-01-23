import Link from "next/link";

export const Links = () => {
  return (
    <div>
      <Link href="/about" className="font-semibold text-xl dark:text-neutral-200">
        About
      </Link>
    </div>
  );
};
