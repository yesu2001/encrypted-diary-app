import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const { id } = await request.json();

  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase
    .from("journals")
    .update({ is_complete: true })
    .match({ id });
  return NextResponse.json(data);
}
