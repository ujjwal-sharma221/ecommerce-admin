import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismaDb from "@/lib/prismadb";

const LayoutSetup = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismaDb.store.findFirst({
    where: { userId },
  });

  if (store) redirect(`/${store.id}`);

  return <>{children}</>;
};

export default LayoutSetup;
