"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cacheEnd, cacheUrl } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const FormComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const redirectValue = cacheUrl + value + cacheEnd;

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${redirectValue}`);
    setValue("");
  };

  return (
    <form onSubmit={HandleSubmit} className="flex pt-20 space-x-2">
      <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder="Dont enter medium url" />
      <Button>Go</Button>
    </form>
  );
};
