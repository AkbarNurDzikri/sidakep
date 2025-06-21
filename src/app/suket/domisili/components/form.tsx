"use client";

import { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import useRHF from "@/hooks/useRHF";
import domisiliSchema from "../form-config/domisili-schema";
import { ISuketDomisili } from "../form-config/i-suket-domisili";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ISuketDomisiliFormProps } from "../form-config/i-suket-domisili-form-props";
import { FlashMessage } from "@/types/flash-message";
import InputFields from "./input-fields";
import InputFieldsOldAddress from "./input-fields-old-address";
import InputFieldsNewAddress from "./input-fields-new-address";
import useOldAddress from "../hooks/useOldAddress";
import useNewAddress from "../hooks/useNewAddress";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { SuketDomisiliPDF } from "./pdf";
import { Modal } from "@/components/atoms/modal";
import { FieldErrors } from "react-hook-form";

export default function SuketDomisiliForm({
  defaultValues,
  handleService,
}: ISuketDomisiliFormProps) {
  const form = useRHF<ISuketDomisili>(domisiliSchema, defaultValues);
  const [flashMessage, setFlashMessage] = useState<FlashMessage>({
    isError: false,
    message: "",
  });
  const [openModal, setOPenModal] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  console.log(flashMessage);

  const {
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
  } = useOldAddress(form, setFlashMessage);

  const {
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
  } = useNewAddress(form, setFlashMessage);

  const isFormValid = form.formState.isValid;

  useEffect(() => {
    if (openModal) {
      const timer = setTimeout(() => {
        setShowPdf(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShowPdf(false);
    }
  }, [openModal]);

  const handleError = (errors: FieldErrors<ISuketDomisili>) => {
    const firstErrorField = Object.keys(errors)[0];
    const element = document.querySelector(`[name="${firstErrorField}"]`);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        (element as HTMLElement).focus();
      }, 100);
    }
  };

  return (
    <Card className="w-full p-1 py-5">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(
              (formData: ISuketDomisili) => handleService(formData),
              handleError
            )}
          >
            <InputFields form={form} />

            <InputFieldsOldAddress
              form={form}
              provinces={provinces}
              regencies={regencies}
              districts={districts}
              villages={villages}
              isFetchingProv={isFetchingProv}
              isFetchingReg={isFetchingReg}
              isFetchingDist={isFetchingDist}
              isFetchingVilla={isFetchingVilla}
              currentOldProvince={currentOldProvince}
              currentOldRegency={currentOldRegency}
              currentOldVillage={currentOldVillage}
            />

            {currentOldVillage && (
              <InputFieldsNewAddress
                form={form}
                newProvinces={newProvinces}
                newRegencies={newRegencies}
                newDistricts={newDistricts}
                newVillages={newVillages}
                isFetchingNewProv={isFetchingNewProv}
                isFetchingNewReg={isFetchingNewReg}
                isFetchingNewDist={isFetchingNewDist}
                isFetchingNewVilla={isFetchingNewVilla}
                currentNewProvince={currentNewProvince}
                currentNewRegency={currentNewRegency}
                currentNewVillage={currentNewVillage}
              />
            )}

            <div className="flex items-center justify-center gap-3 md:block">
              <Button type="submit" className="mt-3 w-1/2 md:w-full">
                Simpan
              </Button>
              {isFormValid && (
                <Button
                  type="button"
                  className="mt-3 w-1/2 md:w-full bg-slate-700 hover:bg-slate-800"
                  onClick={() => setOPenModal(true)}
                >
                  Preview
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>

      {openModal && (
        <Modal
          open={openModal}
          setOpen={setOPenModal}
          title="Preview"
          description="Sebelum mendownload, pastikan semua data yang Anda input sudah sesuai."
        >
          <div>
            <div className="flex justify-center items-center w-full overflow-auto p-10">
              <div className="w-full max-w-[794px] min-w-[360px] aspect-[210/297] border border-gray-300">
                {showPdf ? (
                  <PDFViewer
                    style={{
                      width: "100%",
                      height: "100%",
                      minWidth: "320px",
                    }}
                  >
                    <SuketDomisiliPDF data={form.getValues()} />
                  </PDFViewer>
                ) : (
                  <div className="text-center text-sm text-muted-foreground p-10">
                    Menyiapkan preview...
                  </div>
                )}
              </div>
            </div>

            <PDFDownloadLink
              document={<SuketDomisiliPDF data={form.getValues()} />}
              fileName="suket-domisili.pdf"
            >
              {({ loading }) => (
                <p className="mt-4 text-center text-sm font-medium text-blue-600 hover:underline">
                  {loading
                    ? "Sedang membuat file..."
                    : "📥 Unduh Surat Keterangan (PDF)"}
                </p>
              )}
            </PDFDownloadLink>
          </div>
        </Modal>
      )}
    </Card>
  );
}
