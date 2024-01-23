import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-bold text-2xl dark:text-neutral-200">Dont.</h1>
      </Link>
    </div>
  );
};
