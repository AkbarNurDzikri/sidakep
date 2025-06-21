import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl text-green-700 font-bold">SIDAKEP</h1>
        <p className="text-sm text-slate-400">
          Sistem Informasi Data Kependudukan
        </p>

        <Button asChild>
          <Link href={`/suket/domisili`}>Domisili</Link>
        </Button>
      </div>
    </div>
  );
}
