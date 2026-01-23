import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ result: "100000000000" });
};
