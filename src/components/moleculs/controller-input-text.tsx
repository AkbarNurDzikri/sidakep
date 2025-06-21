import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { HTMLInputTypeAttribute } from "react";

interface ControllerInputTextProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export default function ControllerInputText<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  className,
  type = "text",
}: ControllerInputTextProps<T>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={`${className} w-full mb-3`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
