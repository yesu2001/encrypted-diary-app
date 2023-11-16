import HomePage from "@/components/home/HomePage";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: session } = await supabase.auth.getSession();

  if (!session) {
    console.log(session);
    redirect("/login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#17181a]">
      <HomePage />
    </main>
  );
}
