"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ContactSchema, contactSchema } from "@/schemas/contact";
import Button from "@/components/core/button";
import Form from "@/components/core/form";
import Input from "@/components/core/input";
import Textarea from "@/components/core/textarea";
import { useToast } from "@/components/core/toaster";

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "all",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const handleFormSubmit = (_formData: ContactSchema) => {
    startTransition(async () => {
      await axios.post("/api/contact", _formData);
      toast({ title: "Email sent successfully" });
      form.reset();
    });
  };

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-zinc-900/60">
      <div className="border-b border-white/5 px-6 py-4">
        <h4 className="font-medium">Tell me how I can help</h4>
      </div>
      <div className="px-6 py-6">
        <Form.FormRoot {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <div className="flex flex-1 gap-4">
              <Form.FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <Form.FormItem className="flex flex-1 flex-col">
                    <Form.FormLabel className="order-1">
                      First Name
                    </Form.FormLabel>
                    <Form.FormMessage className="order-3" />
                    <Form.FormControl className="order-2">
                      <Input
                        type="text"
                        placeholder="Kevin"
                        autoComplete="off"
                        {...field}
                      />
                    </Form.FormControl>
                  </Form.FormItem>
                )}
              />
              <Form.FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <Form.FormItem className="flex flex-1 flex-col">
                    <Form.FormLabel className="order-1">
                      Last Name
                    </Form.FormLabel>
                    <Form.FormMessage className="order-3" />
                    <Form.FormControl className="order-2">
                      <Input
                        type="text"
                        placeholder="Flynn"
                        autoComplete="off"
                        {...field}
                      />
                    </Form.FormControl>
                  </Form.FormItem>
                )}
              />
            </div>
            <Form.FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <Form.FormItem className="flex flex-col">
                  <Form.FormLabel className="order-1">Email</Form.FormLabel>
                  <Form.FormMessage className="order-3" />
                  <Form.FormControl className="order-2">
                    <Input
                      type="text"
                      placeholder="kevin@example.com"
                      autoComplete="off"
                      {...field}
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
            <Form.FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <Form.FormItem className="flex flex-col">
                  <Form.FormLabel className="order-1">Company</Form.FormLabel>
                  <Form.FormMessage className="order-3" />
                  <Form.FormControl className="order-2">
                    <Input
                      type="text"
                      placeholder="Example.inc"
                      autoComplete="off"
                      {...field}
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
            <Form.FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <Form.FormItem className="flex flex-col">
                  <Form.FormLabel className="order-1">
                    How can I help?
                  </Form.FormLabel>
                  <Form.FormMessage className="order-3" />
                  <Form.FormControl className="order-2">
                    <Textarea
                      placeholder="I'm interested in your services for my project and would love to learn more about..."
                      autoComplete="off"
                      className="h-28"
                      {...field}
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
            <div className="flex items-center justify-end gap-4">
              <Button
                type="submit"
                variant="secondary"
                disabled={isPending}
                className="w-full"
              >
                <span>Send Message</span>
              </Button>
            </div>
          </form>
        </Form.FormRoot>
      </div>
    </div>
  );
}
