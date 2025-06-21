import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const response = await fetch(
      `https://open-api.my.id/api/wilayah/regencies/${id}`
    );

    const result = await response.json();

    return NextResponse.json({ success: true, data: result.data });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ success: false, message: err.message });
    } else {
      return NextResponse.json({ success: false, message: String(err) });
    }
  }
}
