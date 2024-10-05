"use client";

import { Property } from "@/gql/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  convertPropertyToForm,
  defaultFormValues,
  FormSchema,
  formSchema,
} from "./form-schema";

export const usePropertyForm = (property?: Property) =>
  useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: property
      ? convertPropertyToForm(property)
      : defaultFormValues,
    mode: "onChange",
  });
