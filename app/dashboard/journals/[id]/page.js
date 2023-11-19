import JournalEntry from "@/components/journal/JournalEntry";
import { decryptData } from "@/utils/journalsApi";
import { checkAuthenticated } from "@/utils/serverApi";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import React from "react";

export default async function page({ params }) {
  const { id } = params;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await checkAuthenticated();
  const { data, error } = await supabase.from("journals").select().eq("id", id);
  if (error) {
    return redirect(
      "/dashboard/journals?message=Not able to fetch journal entry"
    );
  }
  const journalData = data[0];
  const decryptedTitle = decryptData(journalData.title);
  const decryptedContent = decryptData(journalData.content);
  const journal = {
    ...journalData,
    title: decryptedTitle,
    content: decryptedContent,
  };
  return <JournalEntry journal={journal} />;
}
