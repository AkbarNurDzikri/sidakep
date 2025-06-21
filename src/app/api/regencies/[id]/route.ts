import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const pathParts = url.pathname.split("/"); // misal: /api/regencies/33
    const id = pathParts[pathParts.length - 1]; // ambil "33"

    const response = await fetch(
      `https://open-api.my.id/api/wilayah/regencies/${id}`
    );

    const result = await response.json();

    return NextResponse.json({ success: true, data: result.data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
