import prismaDb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import SettingForm from "./components/settings-form";

const SettingsPage = async ({ params }: SettingsPageProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismaDb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) redirect("/");

  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4 ">
        <SettingForm initialData={store}></SettingForm>
      </div>
    </div>
  );
};

export default SettingsPage;
