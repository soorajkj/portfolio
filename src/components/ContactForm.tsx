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
    defaultValues: { fullname: "", email: "", company: "", message: "" },
  });

  const handleFormSubmit = (_formData: ContactSchema) => {
    startTransition(async () => {
      await axios.post("/api/contact", _formData);
      toast({ title: "Email sent successfully" });
      form.reset();
    });
  };

  return (
    <div className="overflow-hidden rounded-xl bg-neutral-900">
      <div className="border-b border-neutral-800 px-8 py-4">
        <h4 className="font-semibold">Tell me how I can help</h4>
      </div>
      <div className="px-8 py-6">
        <Form.FormRoot {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleFormSubmit)}
          >
            <Form.FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <Form.FormItem className="flex flex-col">
                  <Form.FormLabel className="order-1">Full Name</Form.FormLabel>
                  <Form.FormMessage className="order-3" />
                  <Form.FormControl className="order-2">
                    <Input
                      type="text"
                      placeholder="Kevin Flynn"
                      autoComplete="off"
                      {...field}
                    />
                  </Form.FormControl>
                </Form.FormItem>
              )}
            />
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
            <div className="flex items-center gap-2">
              <p className="flex-1 text-xs text-neutral-500">
                You can also email me at{" "}
                <a
                  href="mailto:soorajkj46@gmail.com"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-50"
                >
                  soorajkj46@gmail.com
                </a>
              </p>
              <Button type="submit" disabled={isPending}>
                Send Message
              </Button>
            </div>
          </form>
        </Form.FormRoot>
      </div>
    </div>
  );
}
