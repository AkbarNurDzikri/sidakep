import { FlashMessage } from "@/types/flash-message";
import { fetcher } from "@/utils/fetcher";
import { Dispatch, SetStateAction } from "react";
import { APIProvinces } from "../types/i-api-provinces";
import { capitalizeEachWord } from "@/helpers/text/capital-each-word";

export default async function getProvinces(
  setFlashMessage: Dispatch<SetStateAction<FlashMessage>>,
  setIsFetching: Dispatch<SetStateAction<boolean>>,
  setProvinces: Dispatch<SetStateAction<APIProvinces[] | undefined>>
) {
  const result = await fetcher(
    "https://open-api.my.id/api/wilayah/provinces",
    setFlashMessage,
    setIsFetching
  );

  if (result) {
    const sortedResult = result.sort(
      (a: Record<string, string>, b: Record<string, string>) =>
        a.name.localeCompare(b.name)
    );

    const capitalizedResult = sortedResult.map((r: Record<string, string>) => ({
      ...r,
      name: capitalizeEachWord(r.name),
    }));

    return setProvinces(capitalizedResult);
  }
}
