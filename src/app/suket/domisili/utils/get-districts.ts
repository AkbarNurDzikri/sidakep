import { FlashMessage } from "@/types/flash-message";
import { fetcher } from "@/utils/fetcher";
import { Dispatch, SetStateAction } from "react";
import { APIDistricts } from "../types/i-api-districts";
import { capitalizeEachWord } from "@/helpers/text/capital-each-word";

export default async function getDistricts(
  setFlashMessage: Dispatch<SetStateAction<FlashMessage>>,
  setIsFetching: Dispatch<SetStateAction<boolean>>,
  setRegencies: Dispatch<SetStateAction<APIDistricts[] | undefined>>,
  id: string
) {
  const result = await fetcher(
    `https://open-api.my.id/api/wilayah/districts/${id}`,
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

    return setRegencies(capitalizedResult);
  }
}
