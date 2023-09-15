"use client";

import { store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  ChevronsUpDown,
  FolderCheck,
  FolderPlus,
  StretchHorizontal,
} from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type StoreSwitcherProps = PopoverTriggerProps & {
  items: store[];
};

const StoreSwitcher = ({ className, items = [] }: StoreSwitcherProps) => {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );

  const onStoreSelect = (store: { label: string; value: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StretchHorizontal className="w-4 h-4 mr-2" />
          {currentStore?.label}
          <ChevronsUpDown className="w-4 h-4 ml-auto opacity-50 shrink-0"></ChevronsUpDown>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search.."></CommandInput>
            <CommandEmpty>
              The search for nothing is a journey to nowhere.
            </CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((store) => (
                <CommandItem
                  key={store.value}
                  onSelect={() => onStoreSelect(store)}
                  className="text-sm"
                >
                  {store.label}
                  <FolderCheck
                    className={cn(
                      "ml-auto h-4 w-4 ",
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  ></FolderCheck>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator></CommandSeparator>
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  storeModal.onOpen();
                }}
              >
                <FolderPlus className="w-5 h-5 mr-2"></FolderPlus>
                Create Store
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StoreSwitcher;
