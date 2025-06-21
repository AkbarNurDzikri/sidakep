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

export default function useNewAddress(
  form: UseFormReturn<ISuketDomisili>,
  setFlashMessage: Dispatch<SetStateAction<FlashMessage>>
) {
  const [newProvinces, setNewProvinces] = useState<
    APIProvinces[] | undefined
  >();
  const [newRegencies, setNewRegencies] = useState<
    APIRegencies[] | undefined
  >();
  const [newDistricts, setNewDistricts] = useState<
    APIDistricts[] | undefined
  >();
  const [newVillages, setNewVillages] = useState<APIVillages[] | undefined>();

  const [isFetchingNewProv, setIsFetchingNewProv] = useState(false);
  const [isFetchingNewReg, setIsFetchingNewReg] = useState(false);
  const [isFetchingNewDist, setIsFetchingNewDist] = useState(false);
  const [isFetchingNewVilla, setIsFetchingNewVilla] = useState(false);

  const currentNewProvince = form.watch("newProv");
  const currentNewRegency = form.watch("newKab");
  const currentNewDistrict = form.watch("newKec");
  const currentNewVillage = form.watch("newKel");

  useEffect(() => {
    getProvinces(setFlashMessage, setIsFetchingNewProv, setNewProvinces);
  }, [setFlashMessage]);

  useEffect(() => {
    if (currentNewProvince) {
      getRegencies(
        setFlashMessage,
        setIsFetchingNewReg,
        setNewRegencies,
        currentNewProvince
      );
    }
  }, [currentNewProvince, setFlashMessage]);

  useEffect(() => {
    if (currentNewRegency) {
      getDistricts(
        setFlashMessage,
        setIsFetchingNewDist,
        setNewDistricts,
        currentNewRegency
      );
    }
  }, [currentNewRegency, setFlashMessage]);

  useEffect(() => {
    if (currentNewDistrict) {
      getVillages(
        setFlashMessage,
        setIsFetchingNewVilla,
        setNewVillages,
        currentNewDistrict
      );
    }
  }, [currentNewDistrict, setFlashMessage]);

  return {
    newProvinces,
    newRegencies,
    newDistricts,
    newVillages,
    isFetchingNewProv,
    isFetchingNewReg,
    isFetchingNewDist,
    isFetchingNewVilla,
    currentNewProvince,
    currentNewRegency,
    currentNewVillage,
  };
}
