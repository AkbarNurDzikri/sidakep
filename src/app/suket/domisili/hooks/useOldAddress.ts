import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { APIProvinces } from "../types/i-api-provinces";
import { APIRegencies } from "../types/i-api-regencies";
import { APIDistricts } from "../types/i-api-districts";
import { APIVillages } from "../types/i-api-villages";
import { UseFormReturn } from "react-hook-form";
import { ISuketDomisili } from "../form-config/i-suket-domisili";
import getProvinces from "../utils/get-provinces";
import getRegencies from "../utils/get-regencies";
import getDistricts from "../utils/get-districts";
import getVillages from "../utils/get-villages";
import { FlashMessage } from "@/types/flash-message";

export default function useOldAddress(
  form: UseFormReturn<ISuketDomisili>,
  setFlashMessage: Dispatch<SetStateAction<FlashMessage>>
) {
  const [provinces, setProvinces] = useState<APIProvinces[] | undefined>();
  const [regencies, setRegencies] = useState<APIRegencies[] | undefined>();
  const [districts, setDistricts] = useState<APIDistricts[] | undefined>();
  const [villages, setVillages] = useState<APIVillages[] | undefined>();

  const [isFetchingProv, setIsFetchingProv] = useState(false);
  const [isFetchingReg, setIsFetchingReg] = useState(false);
  const [isFetchingDist, setIsFetchingDist] = useState(false);
  const [isFetchingVilla, setIsFetchingVilla] = useState(false);

  const currentOldProvince = form.watch("oldProv");
  const currentOldRegency = form.watch("oldKab");
  const currentOldDistrict = form.watch("oldKec");
  const currentOldVillage = form.watch("oldKel");

  useEffect(() => {
    getProvinces(setFlashMessage, setIsFetchingProv, setProvinces);
  }, [, setFlashMessage]);

  useEffect(() => {
    if (currentOldProvince) {
      getRegencies(
        setFlashMessage,
        setIsFetchingReg,
        setRegencies,
        currentOldProvince
      );
    }
  }, [currentOldProvince, setFlashMessage]);

  useEffect(() => {
    if (currentOldRegency) {
      getDistricts(
        setFlashMessage,
        setIsFetchingDist,
        setDistricts,
        currentOldRegency
      );
    }
  }, [currentOldRegency, setFlashMessage]);

  useEffect(() => {
    if (currentOldDistrict) {
      getVillages(
        setFlashMessage,
        setIsFetchingVilla,
        setVillages,
        currentOldDistrict
      );
    }
  }, [currentOldDistrict, setFlashMessage]);

  return {
    provinces,
    regencies,
    districts,
    villages,
    isFetchingProv,
    isFetchingReg,
    isFetchingDist,
    isFetchingVilla,
    currentOldProvince,
    currentOldRegency,
    currentOldVillage,
  };
}
