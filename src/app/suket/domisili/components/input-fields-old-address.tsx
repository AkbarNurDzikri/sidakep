import { Spinner } from "@/components/atoms/spinner";
import ControllerInputSelect from "@/components/moleculs/controller-input-select";
import ControllerInputText from "@/components/moleculs/controller-input-text";
import ControllerInputTextArea from "@/components/moleculs/controller-input-text-area";
import { Separator } from "@/components/ui/separator";
import { UseFormReturn } from "react-hook-form";
import { ISuketDomisili } from "../form-config/i-suket-domisili";
import { APIProvinces } from "../types/i-api-provinces";
import { APIRegencies } from "../types/i-api-regencies";
import { APIDistricts } from "../types/i-api-districts";
import { APIVillages } from "../types/i-api-villages";

interface InputFieldsOldAddressProps {
  form: UseFormReturn<ISuketDomisili>;
  isFetchingProv: boolean;
  isFetchingReg: boolean;
  isFetchingDist: boolean;
  isFetchingVilla: boolean;
  provinces: APIProvinces[] | undefined;
  regencies: APIRegencies[] | undefined;
  districts: APIDistricts[] | undefined;
  villages: APIVillages[] | undefined;
  currentOldProvince: string;
  currentOldRegency: string;
  currentOldVillage: string;
}

export default function InputFieldsOldAddress({
  form,
  isFetchingProv,
  isFetchingReg,
  isFetchingDist,
  isFetchingVilla,
  provinces,
  regencies,
  districts,
  villages,
  currentOldProvince,
  currentOldRegency,
  currentOldVillage,
}: InputFieldsOldAddressProps) {
  return (
    <>
      <h3 className="font-bold text-slate-800 mb-1">Alamat Sebelum</h3>
      <Separator className="mb-3" />

      {isFetchingProv ? (
        <Spinner className="mx-auto" />
      ) : (
        Array.isArray(provinces) && (
          <ControllerInputSelect
            form={form}
            name="oldProv"
            optionItems={provinces.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Provinsi"
          />
        )
      )}

      {isFetchingReg ? (
        <Spinner className="mx-auto" />
      ) : (
        currentOldProvince &&
        Array.isArray(regencies) && (
          <ControllerInputSelect
            form={form}
            name="oldKab"
            optionItems={regencies.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kabupaten"
          />
        )
      )}

      {isFetchingDist ? (
        <Spinner className="mx-auto" />
      ) : (
        currentOldRegency !== null &&
        Array.isArray(districts) && (
          <ControllerInputSelect
            form={form}
            name="oldKec"
            optionItems={districts.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kecamatan"
          />
        )
      )}

      {isFetchingVilla ? (
        <Spinner className="mx-auto" />
      ) : (
        currentOldRegency !== null &&
        Array.isArray(villages) && (
          <ControllerInputSelect
            form={form}
            name="oldKel"
            optionItems={villages.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kelurahan / Desa"
          />
        )
      )}

      {currentOldVillage && (
        <>
          <ControllerInputText
            form={form}
            label="RT"
            name="oldRT"
            type="number"
            placeholder="007"
          />

          <ControllerInputText
            form={form}
            label="RW"
            name="oldRW"
            type="number"
            placeholder="008"
          />

          <ControllerInputTextArea
            form={form}
            label="Alamat"
            placeholder="Jl. Pegangsaan No. 9"
            name="oldAddress"
          />
        </>
      )}
    </>
  );
}
