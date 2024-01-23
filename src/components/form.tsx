"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { CACHE_END, CACHE_URL } from "@/lib/utils";

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
    <form onSubmit={HandleSubmit} className="flex pt-20 space-x-2">
      <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder="Dont. Enter medium url" />
      <Button>Go</Button>
    </form>
  );
};
