import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://open-api.my.id/api/wilayah/provinces"
    );
    const result = await response.json();
    return NextResponse.json({ success: true, data: result.data });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ success: false, message: err.message });
    } else {
      return NextResponse.json({ success: false, message: err });
    }
  }
}
