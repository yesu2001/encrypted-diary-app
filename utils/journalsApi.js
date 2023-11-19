import { createClient } from "./supabase/client";
import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  const key = process.env.NEXT_ENCRYPT_KEY;
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    key
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  const key = process.env.NEXT_ENCRYPT_KEY;
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return data;
};

export const fetchJournlsData = async (userId) => {
  //   const supabase = createClient();
  const supabase = createClient();
  const { data, error } = await supabase
    .from("journals")
    .select()
    .eq("user_id", userId);
  // console.log("data", data);
  if (error) {
    throw new error("Unable to fetch journal data");
  }
  return data;
};

export const fetchOneJournal = async (id) => {
  const supabase = createClient();
  const { data, error } = await supabase.from("journals").select().eq("id", id);
  if (error) {
    throw new error("Unable to fetch single journal ");
  }
  return data;
};

export const insertNewJournal = async (journalData) => {
  const supabase = createClient();
  const { data, error } = await supabase.from("journals").insert(journalData);
  console.log(data);
  console.log(error);
  if (error) {
    return error;
  }
  return data;
};

export const updateJournalTitle = async (title, id) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("journals")
    .update({ title: title })
    .eq("id", id)
    .select();

  console.log(data[0]);
  console.log(error);
  if (error) {
    throw new error("Not able to update journal title", error);
  }
  return data[0];
};

export const updateJournalContent = async (content, id) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("journals")
    .update({ content: content })
    .eq("id", id)
    .select();

  console.log(data[0]);
  console.log(error);
  if (error) {
    throw new error("Not able to update journal title", error);
  }
  return data[0];
};

export const pushToTrash = async (id) => {
  const supabase = createClient();
  await supabase.from("journals").update({ status: "deactive" }).eq("id", id);
};

export const deleteCompletely = async (id) => {
  const supabase = createClient();
  const { error } = await supabase.from("journals").delete().eq("id", id);
  if (error) {
    return error;
  }
};

export const restoreJournalWithId = async (id) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("journals")
    .update({ status: "active" })
    .eq("id", id);
  console.log(data, error);
};
