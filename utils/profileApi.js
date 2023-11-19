import { createClient } from "./supabase/client";

// save user to db
export const saveUserToDB = async () => {};

// fetch user
export const fetchUserfromDB = async () => {
  const supabase = createClient();
  const { userId } = await getUser();
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("user_id", userId);
  return data[0];
};

// update user
export const updateUserInDB = async (userData, userId) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .update({ name: userData.name })
    .eq("user_id", userId)
    .select();
  if (error) {
    throw new Error(error);
  }
  return data[0];
};

export async function getUser() {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  return {
    userId: user?.user?.id,
    userEmail: user?.user?.email,
  };
}
