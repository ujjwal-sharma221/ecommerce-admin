import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismaDb from "@/lib/prismadb";
import Navbar from "@/components/Navbar";

const DashboardLayout = async ({ children, params }: DashboardProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = prismaDb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) redirect("/");

  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default DashboardLayout;
