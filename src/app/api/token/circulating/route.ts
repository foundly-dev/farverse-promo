import { NextResponse } from "next/server";

export const GET = async () => {
  const totalSupply = 100000000000n;
  const teamBalance = 20341096853n;

  return NextResponse.json({
    result: (totalSupply - teamBalance).toString(),
  });
};
