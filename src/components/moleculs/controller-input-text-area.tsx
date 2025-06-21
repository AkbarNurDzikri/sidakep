import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { HTMLInputTypeAttribute } from "react";
import { Textarea } from "../ui/textarea";

interface ControllerInputTextAreaProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export default function ControllerInputTextArea<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  className,
}: ControllerInputTextAreaProps<T>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={`${className} w-full mb-3`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
