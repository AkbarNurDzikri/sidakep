import { ISuketDomisili } from "./i-suket-domisili";

export interface ISuketDomisiliFormProps {
  defaultValues: ISuketDomisili;
  handleService: (formData: ISuketDomisili) => void;
}
