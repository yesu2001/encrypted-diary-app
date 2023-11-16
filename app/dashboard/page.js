import Workspace from "@/components/dashboard/Workspace";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createClient(cookies());
  const { data: user } = await supabase.auth.getUser();
  console.log(user);

  return <Workspace user={user?.user} />;
}
