import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismaDb from "@/lib/prismadb";

import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const stores = await prismaDb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores}></StoreSwitcher>
        <MainNav className="mx-6"></MainNav>
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/"></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
