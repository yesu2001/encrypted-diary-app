import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SaveUserToDB, getUserFromDB } from "@/utils/serverApi";

export default function Login(searchParams) {
  const signIn = async (formData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/auth?message=Could not authenticate user");
    }
    const { data: user } = await supabase.auth.getUser();

    const userData = await getUserFromDB(supabase, user);

    return redirect("/dashboard");
  };

  const signUp = async (formData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/api/callback`,
      },
    });

    if (error) {
      return redirect(
        "/auth?message=Could not authenticate user or user already exists"
      );
    }

    return redirect("/auth?message=Check email to continue sign in process");
  };

  return (
    <div className="flex items-center justify-center bg-[#17181a]">
      <div className="flex-1 flex flex-col min-h-screen px-8 sm:max-w-md justify-center gap-2">
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-white bg-slate-700 hover:bg-slate-800 flex items-center group text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>

        <div>
          <form
            className="animate-in flex-1 rounded-md bg-secondary shadow-md shadow-slate-800 px-10 py-10 text-slate-400 flex flex-col w-full justify-center gap-2 text-textColor"
            action={signIn}
          >
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border-2 border-slate-600 mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border-2 border-slate-600 mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <button className="bg-indigo-300 rounded-md px-4 py-2 text-slate-800 mb-2">
              Sign In
            </button>
            <button
              formAction={signUp}
              className="hover:bg-background transition-all duration-200 ease-linear rounded-md px-4 py-2 text-accent font-semibold mb-2"
            >
              Sign Up
            </button>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-accent text-slate-300 text-center">
                {searchParams.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
