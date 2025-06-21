import FormSuketDomisili from "../components/form";
import defaultValues from "../form-config/default-values";
import { ISuketDomisili } from "../form-config/i-suket-domisili";

export default function SuketDomisiliCreatePage() {
  async function handleService(formData: ISuketDomisili) {
    "use server";
    console.log(formData);
  }

  return (
    <div className="mx-auto p-5 my-2 md:p-10">
      <div className="w-full md:w-2/3 mx-auto">
        {/* <h3 className="text-center font-bold text-lg mb-5">
          Surat Keterangan Domisili
        </h3> */}
        <FormSuketDomisili
          defaultValues={defaultValues}
          handleService={handleService}
        />
      </div>
    </div>
  );
}
