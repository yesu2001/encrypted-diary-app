import Workspace from "@/components/dashboard/Workspace";
import { checkAuthenticated } from "@/utils/serverApi";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const supabase = createClient(cookies());
  await checkAuthenticated();
  const { data: user } = await supabase.auth.getUser();

  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      <Workspace user={user?.user} />
    </div>
  );
}
