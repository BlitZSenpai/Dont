"use client";

import { CACHE_END, CACHE_URL } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  value: z
    .string()
    .min(2, {
      message: "URL must be at least 2 characters.",
    })
    .regex(/^https:\/\/medium\.com\//, {
      message: "URL must be a medium article.",
    }),
});

type UrlType = z.infer<typeof formSchema>;

export const FormComponent = () => {
  const router = useRouter();

  const onSubmit = useCallback(
    (value: UrlType) => {
      const redirectValue = CACHE_URL + value + CACHE_END;
      router.push(`${redirectValue}`);
    },
    [router]
  );

  const form = useForm<UrlType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      value: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row justify-center h-full w-full gap-4 px-6 md:px-14 lg:max-w-4xl lg:px-0">
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input placeholder="Don't do it..." className="h-14 w-full" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="h-14 text-lg whitespace-nowrap" size="lg">
          Go <ChevronsRight className="w-6 h-6 ml-[2px]" />
        </Button>
      </form>
    </Form>
  );
};
