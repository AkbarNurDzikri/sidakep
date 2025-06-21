import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DomisiliPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-xl font-bold">Daftar Surat Domisili</h1>
        <Button asChild className="w-full">
          <Link href={`/suket/domisili/new`}>Baru</Link>
        </Button>
      </div>
    </div>
  );
}
