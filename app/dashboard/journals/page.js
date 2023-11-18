import { checkAuthenticated } from "@/utils/serverApi";

const page = async () => {
  await checkAuthenticated();
  return (
    <p className="flex-[0.7] w-full my-auto text-center text-2xl text-gray-400">
      Select to view journals
    </p>
  );
};

export default page;
