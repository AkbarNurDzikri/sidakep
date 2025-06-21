import { z } from "zod";

const domisiliSchema = z.object({
  name: z.string().min(1, "wajib diisi"),
  nationId: z.string().min(16, "harus 16 digit").max(16, "maksimal 16 digit"),
  gender: z.string().min(1, "wajib diisi"),
  birthPlace: z.string().min(1, "wajib diisi"),
  birthDate: z.date({
    required_error: "wajib diisi",
    invalid_type_error: "format tanggal tidak valid",
  }),
  religion: z.string().min(1, "wajib diisi"),
  maritalStatus: z.string().min(1, "wajib diisi"),
  occupation: z.string().min(1, "wajib diisi"),
  oldProv: z.string().min(1, "wajib diisi"),
  oldKab: z.string().min(1, "wajib diisi"),
  oldKec: z.string().min(1, "wajib diisi"),
  oldKel: z.string().min(1, "wajib diisi"),
  oldRT: z.string().min(1, "wajib diisi").max(3, "maksimal 3 digit"),
  oldRW: z.string().min(1, "wajib diisi").max(3, "maksimal 3 digit"),
  oldAddress: z.string().min(1, "wajib diisi"),
  newProv: z.string().min(1, "wajib diisi"),
  newKab: z.string().min(1, "wajib diisi"),
  newKec: z.string().min(1, "wajib diisi"),
  newKel: z.string().min(1, "wajib diisi"),
  newRT: z.string().min(1, "wajib diisi").max(3, "maksimal 3 digit"),
  newRW: z.string().min(1, "wajib diisi").max(3, "maksimal 3 digit"),
  newAddress: z.string().min(1, "wajib diisi"),
});

export default domisiliSchema;
