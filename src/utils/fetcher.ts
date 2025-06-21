import { FlashMessage } from "@/types/flash-message";
import { Dispatch, SetStateAction } from "react";

export async function fetcher(
  endpoint: string,
  setFlashMessage: Dispatch<SetStateAction<FlashMessage>>,
  setIsFetching: Dispatch<SetStateAction<boolean>>
) {
  setIsFetching(true);
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Terjadi kesalahan tak terduga. Silahkan coba beberapa saat lagi";
    setFlashMessage({ isError: true, message });
    return null;
  } finally {
    setIsFetching(false);
  }
}
