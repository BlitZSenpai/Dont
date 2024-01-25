import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="font-bold text-2xl dark:text-white hover:opacity-70 transition-opacity">Dont.</h1>
      </Link>
    </div>
  );
};
