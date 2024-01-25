"use client";

import { CACHE_END, CACHE_URL } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChevronsRight } from "lucide-react";

export const FormComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const redirectValue = CACHE_URL + value + CACHE_END;

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${redirectValue}`);
    setValue("");
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="flex justify-center h-full w-full max-w-4xl gap-2 px-6 md:px-14 lg:px-0 ">
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Dont. do it..."
        className="h-14"
      />
      <Button className="h-14 text-lg" size="lg">
        Go <ChevronsRight className="w-5 h-5 ml-0.5" />
      </Button>
    </form>
  );
};
