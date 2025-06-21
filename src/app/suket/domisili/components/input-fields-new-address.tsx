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

interface InputFieldsNewAddressProps {
  form: UseFormReturn<ISuketDomisili>;
  isFetchingNewProv: boolean;
  isFetchingNewReg: boolean;
  isFetchingNewDist: boolean;
  isFetchingNewVilla: boolean;
  newProvinces: APIProvinces[] | undefined;
  newRegencies: APIRegencies[] | undefined;
  newDistricts: APIDistricts[] | undefined;
  newVillages: APIVillages[] | undefined;
  currentNewProvince: string;
  currentNewRegency: string;
  currentNewVillage: string;
}

export default function InputFieldsNewAddress({
  form,
  isFetchingNewProv,
  isFetchingNewReg,
  isFetchingNewDist,
  isFetchingNewVilla,
  newProvinces,
  newRegencies,
  newDistricts,
  newVillages,
  currentNewProvince,
  currentNewRegency,
  currentNewVillage,
}: InputFieldsNewAddressProps) {
  return (
    <>
      <h3 className="font-bold text-slate-800 mb-1">Alamat Sekarang</h3>
      <Separator className="mb-3" />

      {isFetchingNewProv ? (
        <Spinner className="mx-auto" />
      ) : (
        Array.isArray(newProvinces) && (
          <ControllerInputSelect
            form={form}
            name="newProv"
            optionItems={newProvinces.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Provinsi"
          />
        )
      )}

      {isFetchingNewReg ? (
        <Spinner className="mx-auto" />
      ) : (
        currentNewProvince &&
        Array.isArray(newRegencies) && (
          <ControllerInputSelect
            form={form}
            name="newKab"
            optionItems={newRegencies.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kabupaten"
          />
        )
      )}

      {isFetchingNewDist ? (
        <Spinner className="mx-auto" />
      ) : (
        currentNewRegency !== null &&
        Array.isArray(newDistricts) && (
          <ControllerInputSelect
            form={form}
            name="newKec"
            optionItems={newDistricts.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kecamatan"
          />
        )
      )}

      {isFetchingNewVilla ? (
        <Spinner className="mx-auto" />
      ) : (
        currentNewRegency !== null &&
        Array.isArray(newVillages) && (
          <ControllerInputSelect
            form={form}
            name="newKel"
            optionItems={newVillages.map((p) => ({
              label: p.name,
              value: p.id,
            }))}
            label="Kelurahan / Desa"
          />
        )
      )}

      {currentNewVillage && (
        <>
          <ControllerInputText
            form={form}
            label="RT"
            name="newRT"
            type="number"
            placeholder="007"
          />

          <ControllerInputText
            form={form}
            label="RW"
            name="newRW"
            type="number"
            placeholder="008"
          />

          <ControllerInputTextArea
            form={form}
            label="Alamat"
            placeholder="Jl. Pegangsaan No. 9"
            name="newAddress"
          />
        </>
      )}
    </>
  );
}
