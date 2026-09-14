"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/features/contact/schema";
import { submitContactForm } from "@/features/contact/services/contact-service";
import { companySizeOptions } from "@/constants/contact";
import { services } from "@/features/services/data";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ApiError } from "@/lib/api/client";

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      await submitContactForm(values);
      setSubmitState("success");
      reset();
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof ApiError ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (submitState === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-2 border border-border-strong bg-bg-elevated p-8"
      >
        <p className="text-lg font-semibold text-text">Message sent.</p>
        <p className="text-sm text-text-muted">
          Thanks for reaching out. A member of our team will get back to you shortly.
        </p>
        <Button variant="secondary" className="mt-4" onClick={() => setSubmitState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="name" label="Name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </FormField>
        <FormField id="company" label="Company" error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="email" label="Work email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </FormField>
        <FormField id="phone" label="Phone" optional error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="companySize" label="Company size" error={errors.companySize?.message}>
          <Select id="companySize" defaultValue="" {...register("companySize")}>
            <option value="" disabled>
              Select company size
            </option>
            {companySizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          id="serviceInterest"
          label="Service interested in"
          error={errors.serviceInterest?.message}
        >
          <Select id="serviceInterest" defaultValue="" {...register("serviceInterest")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.shortName}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us a bit about what you're looking for."
          {...register("message")}
        />
      </FormField>

      {submitState === "error" && submitError ? (
        <p role="alert" className="text-sm text-[#e07a5f]">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="sm:self-start">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
