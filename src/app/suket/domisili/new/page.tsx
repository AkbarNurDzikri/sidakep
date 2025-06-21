import { Separator } from "@/components/ui/separator";
import FormSuketDomisili from "../components/form";
import defaultValues from "../form-config/default-values";
import { ISuketDomisili } from "../form-config/i-suket-domisili";
import Image from "next/image";

export const metadata = {
  title: "Surat Keterangan Domisili - RT 025 Perum Mutiara Alam Permai",
  description:
    "Formulir resmi untuk pengajuan Surat Keterangan Domisili dari RT 025/RW 011, Perumahan Mutiara Alam Permai.",
  openGraph: {
    title: "Surat Keterangan Domisili - RT 025",
    description:
      "Ajukan Surat Keterangan Domisili dari RT 025 secara online dengan cepat dan mudah.",
    url: "https://sidakep-map.vercel.app/suket/domisili/new",
    siteName: "RT 025 - Mutiara Alam Permai",
    images: [
      {
        url: "https://sidakep-map.vercel.app/logo-perum.png",
        width: 1200,
        height: 630,
        alt: "Preview Surat Keterangan Domisili",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surat Domisili - RT 025 MAP",
    description:
      "Ajukan Surat Keterangan Domisili online dari lingkungan RT 025/RW 011, Perumahan MAP.",
    images: ["https://sidakep-map.vercel.app/logo-perum.png"],
  },
};

export default function SuketDomisiliCreatePage() {
  async function handleService(formData: ISuketDomisili) {
    "use server";
    console.log(formData);
  }

  return (
    <div className="mx-auto p-5 my-2 md:p-10">
      <div className="w-full md:w-2/3 mx-auto">
        {/* Header logo + judul */}
        <div className="grid grid-cols-3 items-center mb-5">
          {/* Logo Kiri */}
          <div className="flex justify-start">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo-kab.png" // Gambar kiri (RT, desa, atau kota)
                alt="Logo Kiri"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Judul Tengah */}
          <h3 className="text-center text-xl font-bold">
            Surat Keterangan Domisili
          </h3>

          {/* Logo Kanan */}
          <div className="flex justify-end">
            <div className="w-16 h-16 relative">
              <Image
                src="/logo-perum.png" // Gambar kanan (Perumahan atau lain)
                alt="Logo Kanan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <Separator className="mb-4 -mt-2" />

        {/* Form */}
        <FormSuketDomisili
          defaultValues={defaultValues}
          handleService={handleService}
        />
      </div>
    </div>
  );
}
