"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { login } from "@/modules/auth/actions/auth.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

type FormSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
    mode: "onSubmit",
  });
  const {
    formState: { errors, isSubmitting },
  } = form;

  async function onSubmit(data: FormSchema) {
    const formData = new FormData();

    formData.set("username", data.username);
    formData.set("password", data.password);

    const errMsg = await login(formData);

    form.setError("root", { message: errMsg, type: "custom" });
  }

  return (
    <Card className="w-full max-w-sm">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your username below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid gap-2">
                      <FormLabel>Username</FormLabel>
                      <Input
                        type="text"
                        placeholder="myusername"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid gap-2">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex-col gap-4">
            {errors.root && (
              <p className={cn("text-[0.8rem] font-medium text-destructive")}>
                {errors.root.message}
              </p>
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className={cn("animate-spin")} />
              ) : (
                "Sign in"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
