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
    <form onSubmit={HandleSubmit} className="flex justify-center h-full w-full max-w-4xl space-x-2">
      <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder="Dont. Enter medium url" />
      <Button size="lg">
        Go <ChevronsRight className="w-5 h-5 ml-0.5" />
      </Button>
    </form>
  );
};
