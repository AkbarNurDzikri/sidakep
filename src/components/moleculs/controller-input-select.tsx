import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface ControllerInputSelectProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  optionItems: { label: string; value: string }[];
  className?: string;
  label?: string;
}

export default function ControllerInputSelect<T extends FieldValues>({
  form,
  name,
  optionItems,
  className,
  label,
}: ControllerInputSelectProps<T>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className={`${className} w-full mb-3`}>
          <FormLabel>{label}</FormLabel>
          <Select
            name={name}
            value={field.value}
            onValueChange={field.onChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={`Pilih ${label}`} />
            </SelectTrigger>
            <SelectContent>
              {optionItems.map((item, i) => (
                <SelectItem value={item.value} key={i}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
