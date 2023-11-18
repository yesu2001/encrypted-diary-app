import JournalEntry from "@/components/journal/JournalEntry";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

export default async function page({ params }) {
  const { id } = params;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("journals").select().eq("id", id);
  if (error) {
    return redirect(
      "/dashboard/journals?message=Not able to fetch journal entry"
    );
  }
  const journalData = data[0];
  return <JournalEntry journal={journalData} />;
}
