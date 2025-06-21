import ControllerInputDate from "@/components/moleculs/controller-input-date";
import ControllerInputSelect from "@/components/moleculs/controller-input-select";
import ControllerInputText from "@/components/moleculs/controller-input-text";
import { UseFormReturn } from "react-hook-form";
import { ISuketDomisili } from "../form-config/i-suket-domisili";

interface InputFieldsProps {
  form: UseFormReturn<ISuketDomisili>;
}

export default function InputFields({ form }: InputFieldsProps) {
  return (
    <>
      <ControllerInputText
        form={form}
        label="Nama"
        name="name"
        placeholder="Nama Lengkap Anda"
      />

      <ControllerInputText
        form={form}
        label="No. KTP"
        name="nationId"
        placeholder="No. KTP"
        type="number"
      />

      <ControllerInputSelect
        form={form}
        name="gender"
        optionItems={[
          { label: "Laki-laki", value: "Laki-laki" },
          { label: "Perempuan", value: "Perempuan" },
        ]}
        label="Jenis Kelamin"
      />

      <ControllerInputText
        form={form}
        label="Tempat Lahir"
        name="birthPlace"
        placeholder="Karawang"
      />

      <ControllerInputDate form={form} label="Tanggal Lahir" name="birthDate" />

      <ControllerInputSelect
        form={form}
        name="religion"
        optionItems={[
          { label: "Islam", value: "Islam" },
          { label: "Kristen Protestan", value: "Kristen Protestan" },
          { label: "Kristen Katholik", value: "Kristen Katholik" },
          { label: "Hindu", value: "Hindu" },
          { label: "Buddha", value: "Buddha" },
          { label: "Konghucu", value: "Konghucu" },
        ]}
        label="Agama"
      />

      <ControllerInputSelect
        form={form}
        name="maritalStatus"
        optionItems={[
          { label: "Belum Kawin", value: "Belum Kawin" },
          { label: "Kawin", value: "Kawin" },
          { label: "Duda", value: "Duda" },
          { label: "Janda", value: "Janda" },
        ]}
        label="Status Perkawinan"
      />

      <ControllerInputText
        form={form}
        label="Pekerjaan"
        name="occupation"
        placeholder="Karyawan Swasta"
      />
    </>
  );
}
