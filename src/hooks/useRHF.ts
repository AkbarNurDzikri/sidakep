import {
  DefaultValues,
  FieldValues,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodTypeAny } from "zod";

const useRHF = <T extends FieldValues>(
  schema: ZodTypeAny,
  defaultValues: DefaultValues<T>
): UseFormReturn<T> => {
  return useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });
};

export default useRHF;
